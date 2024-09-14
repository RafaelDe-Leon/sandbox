const mongoose = require('mongoose')
const User = require('./models/userModel') // Import the user model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/billingApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Insert or update payment records for users
const insertOrUpdateUserPayments = async () => {
  try {
    const users = [
      {
        name: 'John Doe',
        email: 'rdmail88+test1@gmail.com',
        payments: [
          { month: 'January2024', hasPaid: true, amountOwed: 100 },
          { month: 'February2024', hasPaid: false, amountOwed: 150 },
        ],
      },
      {
        name: 'John Doe 2',
        email: 'rdmail88+test2@gmail.com',
        payments: [
          { month: 'January2024', hasPaid: false, amountOwed: 120 },
          { month: 'February2024', hasPaid: false, amountOwed: 130 },
        ],
      },
      {
        name: 'Janna Cruz',
        email: 'rdmail88+test3@gmail.com',
        payments: [
          { month: 'January2024', hasPaid: false, amountOwed: 120 },
          { month: 'February2024', hasPaid: false, amountOwed: 130 },
          { month: 'March2024', hasPaid: false, amountOwed: 130 },
          { month: 'April2024', hasPaid: false, amountOwed: 130 },
          { month: 'May2024', hasPaid: true, amountOwed: 130 },
          { month: 'June2024', hasPaid: true, amountOwed: 130 },
        ],
      },
      {
        name: 'Janna Cruz',
        email: 'jcmail500@gmail.com',
        payments: [
          { month: 'January2024', hasPaid: false, amountOwed: 120 },
          { month: 'February2024', hasPaid: false, amountOwed: 130 },
          { month: 'March2024', hasPaid: false, amountOwed: 130 },
          { month: 'April2024', hasPaid: false, amountOwed: 130 },
          { month: 'May2024', hasPaid: true, amountOwed: 130 },
          { month: 'June2024', hasPaid: true, amountOwed: 130 },
          { month: 'July2024', hasPaid: false, amountOwed: 130 },
          { month: 'August2024', hasPaid: false, amountOwed: 130 },
        ],
      },
    ]

    // Update or insert users and payments
    for (let userData of users) {
      await User.updateOne(
        { email: userData.email },
        { $set: { name: userData.name, payments: userData.payments } },
        { upsert: true }
      )
    }

    console.log('User payment data updated.')
  } catch (error) {
    console.log('Error updating user data:', error)
  } finally {
    mongoose.connection.close()
  }
}

// Run the function
insertOrUpdateUserPayments()
