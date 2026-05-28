import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "First name is required"],
    minlength: [3, "First name must be at least 3 characters"],
    maxlength: [20, "First name cannot exceed 20 characters"],
    trim: true,
  },

  last_name: {
    type: String,
    required: [true, "Last name is required"],
    minlength: [3, "Last name must be at least 3 characters"],
    maxlength: [20, "Last name cannot exceed 20 characters"],
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,

    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Please enter a valid email",
    },
  },

  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
  },

  ip_address: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("user", userSchema);

export default User;