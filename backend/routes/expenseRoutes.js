const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Expense = require("../models/Expense");
const { createExpense, getAnalytics } = require("../controllers/expenseController");
// CREATE EXPENSE
// router.post("/", auth, async (req, res) => {
//   try {
//     const { group, title, totalAmount, paidBy, splitType, users, items } = req.body;

//     let participants = [];

//     if (splitType === "equal") {
//       const share = totalAmount / users.length;
//       participants = users.map(u => ({ user: u, amount: share }));
//     }

//     if (splitType === "item") {
//       const balances = {};
//       items.forEach(item => {
//         const share = item.price / item.users.length;

//         item.users.forEach(u => {
//           if (!balances[u]) balances[u] = 0;
//           balances[u] += share;
//         });
//       });

//       participants = Object.keys(balances).map(u => ({
//         user: u,
//         amount: balances[u]
//       }));
//     }

//     const expense = await Expense.create({
//       group,
//       title,
//       totalAmount,
//       paidBy,
//       splitType,
//       participants,
//       items
//     });

//     res.json(expense);

//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// });
router.post("/", auth, async (req, res) => {
  try {
    const { group, title, totalAmount, splitType, users } = req.body;

    // ✅ logged-in user
    const paidBy = req.user.id;

    const share = totalAmount / users.length;

    const participants = users.map(u => ({
      user: u,
      amount: share
    }));

    const expense = await Expense.create({
      group,
      title,
      totalAmount,
      paidBy,
      splitType,
      participants
    });

    res.json(expense);

  } catch (err) {
    res.status(500).json(err.message);
  }
});
 
 
router.get("/analytics/:groupId", auth, getAnalytics);
 
// GET ALL EXPENSES
router.get("/", async (req, res) => {
  try {
    // const expenses = await Expense.find();
    const expenses = await Expense.find()
  .populate("paidBy", "name")
  .populate("participants.user", "name");
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/balances/:groupId", async (req, res) => {
  try {
    const Expense = require("../models/Expense");

    //const expenses = await Expense.find({ group: req.params.groupId });
    const expenses = await Expense.find({
  group: req.params.groupId,
  settled: false   // ✅ IMPORTANT
}).populate("paidBy", "name")
.populate("participants.user", "name");
    const balances = {};

    expenses.forEach(exp => {
      exp.participants.forEach(p => {
        if (p.user !== exp.paidBy) {
          const key = `${p.user.name} -> ${exp.paidBy.name}`;
          //const key = `${p.user.name || p.user}->${exp.paidBy.name || exp.paidBy}`;
          if (!balances[key]) balances[key] = 0;
          balances[key] += p.amount;
        }
      });
    });

    res.json(balances);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post("/settle/:id", async (req, res) => {
  try {
    const Expense = require("../models/Expense");

    //const expense = await Expense.findById(req.params.id);
    const expenses = await Expense.find()
  .populate("paidBy", "name")
  .populate("participants.user", "name");
    if (!expense) {
      return res.status(404).json({ msg: "Expense not found" });
    }

    expense.settled = true;

    await expense.save();

    res.json({ msg: "Expense settled successfully", expense });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;