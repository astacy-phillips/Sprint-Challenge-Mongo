const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  budgetAmount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Budget", BudgetSchema);
