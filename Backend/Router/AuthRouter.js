const express = require('express');
const router = express.Router();
const User = require('../Model/UserModel');
const bcrypt = require('bcryptjs');
const generateToken = require('../utills/genratetoken'); // Use your utility

// --- SIGNUP ROUTE ---
router.post('/signup', async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        // Generate token so they are "logged in" immediately after signing up
        const token = generateToken(user._id);

        res.status(201).json({ 
            success: true, 
            message: "Account created!", 
            token 
        });
    } catch (err) {
        next(err); // Sends error to your errormiddleware
    }
});

// --- LOGIN ROUTE ---
router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // 1. Search for the user by email in MongoDB
        const user = await User.findOne({ email });

        // 2. If user doesn't exist, stop here
        if (!user) {
            return res.status(401).json({ success: false, message: "Account not found. Please sign up." });
        }

        // 3. Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (isMatch) {
            // 4. Generate the token using your utility
            const token = generateToken(user._id);
            
            res.json({ 
                success: true, 
                token, 
                message: "Welcome back!" 
            });
        } else {
            res.status(401).json({ success: false, message: "Incorrect password." });
        }
    } catch (err) {
        next(err); // Pass to your errormiddleware
    }
});

module.exports = router;