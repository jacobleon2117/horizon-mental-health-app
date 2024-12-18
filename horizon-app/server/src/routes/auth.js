// src/routes/auth.js
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { auth } = require("../middleware/auth");
const logger = require("../config/logger");
const { paginateResults } = require("../middleware/pagination");

// Register
router.post("/register", async (req, res) => {
  try {
    const { email, password, fullName, userType } = req.body;
    logger.info("Registration attempt", { email, userType });

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      logger.warn("Registration failed - Email already exists", { email });
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      email,
      password: hashedPassword,
      fullName,
      userType,
    });

    await user.save();

    // Generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    logger.info("User registered successfully", { userId: user._id, userType });

    res.status(201).json({
      token,
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
        userType: user.userType,
      },
    });
  } catch (error) {
    logger.error("Registration error", { error: error.message });
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    logger.info("Login attempt", { email });

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      logger.warn("Login failed - Invalid credentials", { email });
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      logger.warn("Login failed - Invalid password", { email });
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    logger.info("User logged in successfully", { userId: user._id });

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
        userType: user.userType,
      },
    });
  } catch (error) {
    logger.error("Login error", { error: error.message });
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get all users (with pagination)
router.get("/users", auth, paginateResults(User), async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .skip(req.paginationOptions.skip)
      .limit(req.paginationOptions.limit);

    logger.info("Users list retrieved", {
      page: req.paginationResults.currentPage,
      totalUsers: req.paginationResults.totalDocs,
    });

    res.json({
      ...req.paginationResults,
      data: users,
    });
  } catch (error) {
    logger.error("Error fetching users", { error: error.message });
    res.status(500).json({ message: error.message });
  }
});

// Get current user
router.get("/me", auth, async (req, res) => {
  try {
    logger.info("Profile accessed", { userId: req.user._id });

    res.json({
      user: {
        id: req.user._id,
        email: req.user.email,
        fullName: req.user.fullName,
        userType: req.user.userType,
        profile: req.user.profile,
      },
    });
  } catch (error) {
    logger.error("Error fetching profile", {
      userId: req.user._id,
      error: error.message,
    });
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
