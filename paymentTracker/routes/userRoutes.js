const express = require('express')
const router = express.Router()
const User = require('../models/userModel') // Import the user model

// Route to get full user info by email
router.get('/get-user-info/:email', async (req, res) => {
  console.log('Fetching user info for email:', req.params.email)
  try {
    // Find the user by email
    const user = await User.findOne({ email: req.params.email })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    // Return the full user object
    res.status(200).json(user) // Return the full user data
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
})

module.exports = router
