// src/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["patient", "therapist"],
    required: true,
  },
  profile: {
    phoneNumber: String,
    address: String,
    bio: String,
    specialization: String, // for therapists
    licenseNumber: String, // for therapists
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
