const mongoose = require('mongoose')
const User = require('./models/userModel') // Import the user model
const sendEmail = require('./services/emailService') // Import the email service

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/billingApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Function to send payment reminders to users who owe money
const sendPaymentReminders = async () => {
  try {
    const users = await User.find() // Get all users from the database

    for (let user of users) {
      const missedPayments = user.payments.filter(payment => !payment.hasPaid)
      const totalOwed = missedPayments.reduce((acc, payment) => acc + payment.amountOwed, 0)

      if (totalOwed > 0) {
        // Call the email service to send the email
        await sendEmail(user, totalOwed, missedPayments.length)
      }
    }
  } catch (error) {
    console.log('Error sending payment reminders:', error)
  } finally {
    mongoose.connection.close()
  }
}

// Run the function
sendPaymentReminders()
