const express = require('express')
const router = express.Router()
const User = require('../models/userModel') // Import the user model

// Helper function to get the current month and year in the format 'MonthYYYY'
const getCurrentMonthYear = () => {
  const date = new Date()
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()
  return `${month}${year}`
}

// Route to add the current month if it doesn't already exist
router.post('/add-current-month/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    const currentMonthYear = getCurrentMonthYear()

    const user = await User.findById(userId)
    const existingMonth = user.payments.find(payment => payment.month === currentMonthYear)

    if (!existingMonth) {
      user.payments.push({ month: currentMonthYear, hasPaid: false, amountOwed: 100 }) // Example amountOwed can be dynamic
      await user.save()
      res.status(200).send('Current month added.')
    } else {
      res.status(400).send('Month already exists for the user.')
    }
  } catch (error) {
    res.status(500).send('Error adding current month.')
  }
})

// Route to update payment for the current month
router.post('/update-payment/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    const { amountPaid } = req.body

    const currentMonthYear = getCurrentMonthYear()
    const user = await User.findById(userId)

    const monthData = user.payments.find(payment => payment.month === currentMonthYear)

    if (monthData) {
      monthData.amountOwed -= amountPaid
      if (monthData.amountOwed <= 0) {
        monthData.hasPaid = true
        monthData.amountOwed = 0
      }
      await user.save()
      res.status(200).send('Payment updated successfully.')
    } else {
      res.status(400).send('No payment data for the current month.')
    }
  } catch (error) {
    res.status(500).send('Error updating payment.')
  }
})

module.exports = router
