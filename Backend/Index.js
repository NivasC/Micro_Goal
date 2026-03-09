require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); // Added for serving HTML files
const errormiddleware = require("./Middlewares/errormiddleware");
const authRoute = require("./Router/AuthRouter");
const GoalRouter = require("./Router/GoalRouter");

const app = express();

// 1. Database Connection
const Mongo_Url = process.env.MONGO_URL;
mongoose
  .connect(Mongo_Url)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// 2. Middlewares
app.use(cors());
app.use(express.json()); // Built-in alternative to body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname))); // Allows serving your HTML files

// 3. Routes
// It is better to give them prefixes like /api/auth to avoid route conflicts
app.use("/api/auth", authRoute);
app.use("/api/goals", GoalRouter);

// 4. Serve your HTML files (Routes for the browser)
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "Login.html"));
});

app.get("/microgoal", (req, res) => {
  res.sendFile(path.join(__dirname, "micro goal 2.html"));
});

// 5. Error Handling (Must be after routes)
app.use(errormiddleware);

// 6. Server Listen
// 6. Server Listen
const PORT = process.env.PORT || 8000; 
app.listen(PORT, () => {
  console.log(`\n🚀 Server is running!`);
  console.log(`🔗 Login Page: http://localhost:${PORT}/login`);
  console.log(`🔗 Dashboard:  http://localhost:${PORT}/microgoal`);
  console.log(`✅ MongoDB Connected\n`);
});