// controllers/expenseController.js
const Expense = require("../models/Expense");

function equalSplit(total, users) {
  const share = total / users.length;
  return users.map(u => ({ user: u, amount: share }));
}
function customSplit(participants, total) {
  const sum = participants.reduce((acc, p) => acc + p.amount, 0);

  if (sum !== total) {
    throw new Error("Amounts do not match total");
  }

  return participants;
}
function itemSplit(items) {
  const balances = {};

  items.forEach(item => {
    const share = item.price / item.users.length;

    item.users.forEach(userId => {
      if (!balances[userId]) balances[userId] = 0;
      balances[userId] += share;
    });
  });

  return Object.keys(balances).map(userId => ({
    user: userId,
    amount: balances[userId]
  }));
}
function calculateBalances(expense) {
  const balances = [];

  expense.participants.forEach(p => {
    if (p.user.toString() !== expense.paidBy.toString()) {
      balances.push({
        from: p.user,
        to: expense.paidBy,
        amount: p.amount
      });
    }
  });

  return balances;
}
exports.getAnalytics = async (req, res) => {
  const expenses = await Expense.find({ group: req.params.groupId });

  const totals = {};

  expenses.forEach(exp => {
    exp.participants.forEach(p => {
      if (!totals[p.user]) totals[p.user] = 0;
      totals[p.user] += p.amount;
    });
  });

  res.json(totals);
};