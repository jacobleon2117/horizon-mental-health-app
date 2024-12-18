const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("./config/logger");
require("dotenv").config();

const app = express();

const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS policy error: Not allowed by origin"));
      }
    },
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`, {
    ip: req.ip,
    userAgent: req.get("user-agent"),
  });
  next();
});

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

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.get("/api/test", (req, res) => {
  logger.info("Test endpoint accessed");
  res.json({ message: "API is working!" });
});

app.use((err, req, res, next) => {
  if (err.message && err.message.includes("CORS")) {
    return res
      .status(403)
      .json({ message: "CORS error: Not allowed by origin" });
  }
  logger.error("Unhandled error:", { error: err.stack });
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  console.log(`Server running on port ${PORT}`);
});
