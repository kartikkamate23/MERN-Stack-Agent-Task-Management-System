const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// =====================
// Middlewares
// =====================
app.use(express.json());
app.use(cors());

// =====================
// Test route
// =====================
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// =====================
// Routes
// =====================

// Auth routes (Admin Login)
app.use("/api/auth", require("./routes/authRoutes"));

// Agent routes (Add Agents)
app.use("/api/agents", require("./routes/agentRoutes"));

// CSV Upload & Distribution routes
app.use("/api/upload", require("./routes/uploadRoutes"));

// ✅ Task routes (Agent-wise tasks)
app.use("/api/tasks", require("./routes/taskRoutes"));

// =====================
// MongoDB Connection
// =====================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// =====================
// Server Start
// =====================
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
