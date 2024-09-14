const mongoose = require('mongoose')

// Define a schema for users, including name, email, and payment info
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  payments: [
    {
      month: { type: String }, // Example: 'January2024', 'February2024'
      hasPaid: { type: Boolean, default: false },
      amountOwed: { type: Number, default: 0 }, // Amount owed for that month
    },
  ],
})

// Create and export the user model
const User = mongoose.model('User', userSchema)

module.exports = User
