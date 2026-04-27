const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  group: String,
  title: String,
  totalAmount: Number,
  paidBy: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
},
  splitType: {
    type: String,
    enum: ["equal", "custom", "item"]
  },

  participants: [
    {
      user: String,
      amount: Number
    }
  ],

  items: [
    {
      name: String,
      price: Number,
      users: [String]
    }
  ],
  participants: [
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    amount: Number
  }
],
  settled: {
       type: Boolean,
       default: false
   }
});

module.exports = mongoose.model("Expense", expenseSchema);