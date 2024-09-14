const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors') // To allow frontend to communicate with the backend
const paymentRoutes = require('./routes/paymentRoutes') // Import the payment routes
const userRoutes = require('./routes/userRoutes') // Import the user routes

const app = express()
app.use(express.json()) // To parse JSON bodies
app.use(
  cors({
    origin: 'http://localhost:3000', // Add this if you want to allow requests only from your frontend
  })
)

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/billingApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error))

// Use the payment routes
app.use('/api', paymentRoutes)
app.use('/api', userRoutes)

// Start the server
const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
