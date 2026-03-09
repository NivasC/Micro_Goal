const mongoose = require("mongoose");
const userSchema = require("../Schema/User");

// Create the model (No 'new' keyword needed here)
const User = mongoose.model("User", userSchema);

module.exports = User;