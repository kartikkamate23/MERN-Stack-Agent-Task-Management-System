Machine Test – MERN Stack Developer
📖 Project Overview

This project is a MERN stack backend application developed as part of a Machine Test.
It includes Admin Authentication, Agent Management, CSV Upload, and Equal Task Distribution among agents.

The backend is built using Node.js, Express.js, MongoDB, and supports JWT-based authentication.

🚀 Features Implemented
🔐 1. Admin Login

Admin login using Email & Password

Passwords stored securely using bcrypt

JWT authentication for secure access

Proper success & error responses

👤 2. Agent Creation & Management

Add new agents with:

Name

Email (unique)

Mobile number with country code

Password (hashed)

Validation for required fields

Duplicate agent prevention

Agents stored in MongoDB

📂 3. CSV Upload & Task Distribution

Upload CSV file containing:

FirstName

Phone

Notes

CSV file processed using multer & csv-parser

Tasks distributed equally among 5 agents

Sequential (round-robin) distribution logic

Distributed tasks stored in MongoDB

📋 4. Agent-wise Task Fetch

API to fetch tasks assigned to a specific agent

Uses agentId to retrieve agent-specific tasks

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT, bcrypt

File Upload: Multer

CSV Parsing: csv-parser

Testing: PowerShell / curl / Postman

📁 Project Structure
backend/
│── controllers/
│   ├── agentController.js
│   ├── authController.js
│   ├── uploadController.js
│   └── taskController.js
│
│── models/
│   ├── Agent.js
│   ├── User.js
│   └── Task.js
│
│── routes/
│   ├── agentRoutes.js
│   ├── authRoutes.js
│   ├── uploadRoutes.js
│   └── taskRoutes.js
│
│── uploads/
│── server.js
│── .env
│── package.json

⚙️ Environment Variables

Create a .env file inside the backend folder:

MONGO_URI=mongodb://localhost:27017/agentTask
JWT_SECRET=your_jwt_secret_key

▶️ How to Run the Application
1️⃣ Install Dependencies
npm install

2️⃣ Start MongoDB

Make sure MongoDB is running locally:

mongod

3️⃣ Start Backend Server
node server.js


Server will start at:

http://localhost:5000

🧪 API Endpoints
🔐 Admin Login
POST /api/auth/login

👤 Add Agent
POST /api/agents/add

📂 Upload CSV
POST /api/upload/csv

📋 Get Tasks by Agent
GET /api/tasks/:agentId

🧪 Sample PowerShell Commands
Add Agent
curl.exe -X POST http://localhost:5000/api/agents/add `
-H "Content-Type: application/json" `
-d '{"name":"Agent One","email":"agent1@test.com","mobile":"+919999999999","password":"agent123"}'

Upload CSV
curl.exe -X POST http://localhost:5000/api/upload/csv -F "file=@data.csv"

Fetch Agent Tasks
curl.exe http://localhost:5000/api/tasks/AGENT_ID

🎥 Demo Video

A working video demonstration of the application is recorded and hosted on Google Drive, showing:

Admin Login

Agent Creation

CSV Upload

Task Distribution

MongoDB Data Verification

📎 Demo Video Link: (To be added)

✅ Evaluation Checklist

✔ Functional backend APIs

✔ Clean and modular code

✔ Proper validation & error handling

✔ Secure authentication

✔ Easy setup and execution

🏁 Conclusion : This project fulfills all backend requirements of the Machine Test and demonstrates real-world backend development practices including authentication, file handling, database operations, and task distribution logic.