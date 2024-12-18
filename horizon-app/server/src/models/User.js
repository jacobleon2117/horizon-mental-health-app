const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password must be at least 6 characters long"],
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: [2, "Full name must be at least 2 characters long"],
    },
    userType: {
      type: String,
      enum: ["admin", "user", "therapist"],
      default: "user",
    },
    twoFactorAuth: {
      type: Boolean,
      default: false,
    },
    emailNotifications: {
      type: Boolean,
      default: true,
    },
    pushNotifications: {
      type: Boolean,
      default: false,
    },
    profile: {
      avatar: {
        type: String,
        default: "",
      },
      bio: {
        type: String,
        maxlength: [500, "Bio cannot be more than 500 characters"],
      },
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    lastLogin: Date,
    accountStatus: {
      type: String,
      enum: ["active", "suspended", "pending"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.resetPasswordToken;
  delete obj.resetPasswordExpires;
  return obj;
};

UserSchema.pre("save", function (next) {
  this.email = this.email.toLowerCase();
  next();
});

module.exports = mongoose.model("User", UserSchema);
