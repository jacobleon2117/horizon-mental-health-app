const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.userId });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Please authenticate." });
  }
};

const isTherapist = async (req, res, next) => {
  if (req.user.userType !== "therapist") {
    return res
      .status(403)
      .json({ message: "Access denied. Therapist access required." });
  }
  next();
};

module.exports = { auth, isTherapist };
