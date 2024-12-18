// src/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("./config/logger");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`, {
    ip: req.ip,
    userAgent: req.get("user-agent"),
  });
  next();
});

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    logger.info("Connected to MongoDB");
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    logger.error("MongoDB connection error:", err);
    console.error("MongoDB connection error:", err);
  });

// Import routes
const authRoutes = require("./routes/auth");

// Use routes
app.use("/api/auth", authRoutes);

// Basic route for testing
app.get("/api/test", (req, res) => {
  logger.info("Test endpoint accessed");
  res.json({ message: "API is working!" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error("Unhandled error:", { error: err.stack });
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  console.log(`Server running on port ${PORT}`);
});
