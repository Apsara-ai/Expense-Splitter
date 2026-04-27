// routes/groupRoutes.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Group = require("../models/Group");
const Expense = require("../models/Expense");
const { getAnalytics } = require("../controllers/expenseController");
router.post("/", auth, async (req, res) => {
  const group = await Group.create({
    name: req.body.name,
    members: req.body.members
  });

  res.json(group);
});

router.get("/", auth, async (req, res) => {
  const groups = await Group.find({ members: req.user });
  res.json(groups);
});
router.get("/analytics/:groupId", auth, getAnalytics);

module.exports = router;
