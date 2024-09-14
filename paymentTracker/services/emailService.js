const nodemailer = require('nodemailer')

// Create a transporter for nodemailer (email sending)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Use environment variable for email
    pass: process.env.EMAIL_PASS, // Use environment variable for email password
  },
})

// Function to send an email to a user
const sendEmail = async (user, totalOwed, missedPayments) => {
  const emailContent = `Hello ${user.name},\n\nYou have missed ${missedPayments} payments and owe a total of $${totalOwed}. Please pay your outstanding balance.`

  try {
    const info = await transporter.sendMail({
      from: '"Your Company" rdmail88@gmail.com', // Your company email and name
      to: user.email,
      subject: 'Payment Reminder',
      text: emailContent,
    })
    console.log(`Email sent to ${user.email}: ${info.response}`)
  } catch (error) {
    console.log(`Error sending email to ${user.email}:`, error)
  }
}

module.exports = sendEmail
