const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
    },
    skills: [
      {
        type: String,
        maxlength: 32,
      },
    ],
    city: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    phone: {
      type: Number,
      max: 9999999999,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// methods
userSchema.methods = {
  authenticate: function (plainText) {
    return plainText === this.password;
  },
};

module.exports = mongoose.model("User", userSchema);