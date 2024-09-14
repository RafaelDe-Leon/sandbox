# Payment Tracker App

This is a full-stack **Payment Tracker Application** that allows users to fetch and manage payment data for clients. The application is built using **Node.js** with **Express** for the backend, **MongoDB** as the database, and **React** for the frontend.

## Features

- Fetch user information by email, including payment history.
- Display user details such as name, email, and payment status.
- Update and manage payment data through the frontend interface.
- Full CRUD operations to handle users and their payment records.

## Tech Stack

- **Backend**: Node.js, Express.js, Mongoose
- **Frontend**: React, Axios
- **Database**: MongoDB (using Mongoose for data modeling)

---

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- **MongoDB**: Install and set up MongoDB locally or use a cloud provider like MongoDB Atlas.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/payment-tracker.git
   Navigate into the project folder
   ```

cd payment-tracker
Install backend dependencies

In the root directory, run:

npm install
Navigate to the frontend folder and install dependencies

cd frontend
npm install
Running the Application

1. Start the Backend (Server)
   Make sure MongoDB is running locally, or connect to your MongoDB Atlas cluster.

npm start
This will start the server on http://localhost:5000/. The server will automatically connect to the MongoDB instance.

2. Start the Frontend (React)
   In a separate terminal, navigate to the frontend folder and start the React development server.

cd frontend
npm start
This will start the frontend on http://localhost:3000/.

Project Structure

/backend
|-- /models # Mongoose schemas
| |-- userModel.js # User model for MongoDB
|-- /routes # Backend API routes
| |-- userRoutes.js # API routes for handling user information
|-- server.js # Main entry point for the Node.js server

/frontend
|-- /src
| |-- /components # React components
| | |-- UserPayment.js # Main component to fetch and display user data
| |-- App.js # Main entry point for the React app

README.md # Project documentation
API Endpoints
Get User Info by Email
GET /api/get-user-info/:email

Fetch the user's information, including payment history.
Parameters: email (URL parameter)
Example Response:

{
"\_id": "60e50157d731efde099d0959",
"email": "rdmail88+test1@gmail.com",
"name": "John Doe",
"payments": [
{
"month": "January2024",
"hasPaid": true,
"amountOwed": 100
},
{
"month": "February2024",
"hasPaid": false,
"amountOwed": 150
}
]
}
Available Scripts
In the project directory, you can run the following scripts:

npm start
Runs the backend server on localhost:5000 in development mode.

npm start (from /frontend directory)
Runs the React frontend on localhost:3000 in development mode.

How to Use the Application
Start the backend and frontend as described above.
Navigate to http://localhost:3000/ in your browser.
Enter a user's email and click "Get User Information."
The app will fetch and display the user's details and payment history.
Contributing
Feel free to submit pull requests or open issues if you want to contribute to this project.

License
This project is licensed under the MIT License - see the LICENSE file for details.

---

### Key Sections Explained:

- **Features**: A simple overview of what the project does.
- **Tech Stack**: What technologies are used.
- **Getting Started**: Step-by-step instructions on how to clone the project, install dependencies, and start both the backend and frontend.
- **Project Structure**: A brief explanation of the folder layout and key files in the project.
- **API Endpoints**: Provides information about the key API routes in the backend.
- **Scripts**: Explains what scripts are available to run (both for the backend and frontend).
- **How to Use**: A section explaining how to actually use the app once everything is set up.
- **Contributing**: An invitation for others to contribute to the project.

---

Feel free to modify this template to better suit your project needs. Let me know if you need help with any specific section or additional information for the `README.md`!
