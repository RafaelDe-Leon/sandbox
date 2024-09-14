import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserPayment = () => {
  const [email, setEmail] = useState('') // To hold the user's email input
  const [userData, setUserData] = useState(null) // To hold the fetched user data
  const [error, setError] = useState('') // To handle any errors
  const [totalOwed, setTotalOwed] = useState(0) // To hold the total amount owed by the user

  const fetchUserData = async () => {
    if (!email.trim()) {
      setError('Please enter a valid email.')
      return
    }

    console.log('Fetching user data for email:', email)
    try {
      const response = await axios.get(
        `http://localhost:5000/api/get-user-info/${encodeURIComponent(email)}`
      )
      console.log('User data:', response.data)
      setUserData(response.data) // Store the full user data in the state
      setError('') // Clear any previous errors
    } catch (error) {
      console.error('Error fetching user data:', error)
      setError('User not found or server error occurred')
    }
  }

  useEffect(() => {
    if (userData) {
      const missedPayments = userData.payments.filter(payment => !payment.hasPaid)
      console.log('Missed Payments:', missedPayments) // Debugging statement
      const totalOwed = missedPayments.reduce((acc, payment) => acc + payment.amountOwed, 0)
      setTotalOwed(totalOwed)
      console.log('Total Owed:', totalOwed) // Debugging statement
    }
  }, [userData]) // Dependency array to avoid infinite loop

  return (
    <div>
      <h1>User Information Fetcher</h1>

      {/* Input to enter user email */}
      <div>
        <input
          type='email'
          placeholder='Enter user email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button onClick={fetchUserData}>Get User Information</button>
      </div>

      {/* Display the fetched user data */}
      {userData && (
        <div>
          <h2>User Information:</h2>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>

          {/* Display payment information */}
          <h3>Payments:</h3>
          <ul>
            {userData.payments.map(payment => (
              <li key={payment.month}>
                <strong>{payment.month}:</strong> ${payment.amountOwed} - Paid:{' '}
                {payment.hasPaid ? 'Yes' : 'No'}
              </li>
            ))}
          </ul>

          {/* Display total amount owed */}
          <p>
            <strong>Total Amount Owed:</strong> ${totalOwed}
          </p>
        </div>
      )}

      {/* Display any errors */}
      {error && (
        <div style={{ color: 'red' }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}

export default UserPayment
