const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const expenseRoutes = require("./routes/expenseRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/expense-splitter")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
app.use("/api/users", userRoutes);
 

app.use("/api/auth", authRoutes);

app.use("/api/expenses", expenseRoutes);