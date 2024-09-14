import React from 'react'
import UserPayment from './components/UserPayment' // Import the UserPayment component

function App() {
  return (
    <div className='App'>
      <h1>Payment Tracker App</h1>
      <UserPayment /> {/* Render the UserPayment component */}
    </div>
  )
}

export default App
