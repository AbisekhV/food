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
      required: true,
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
      maxlength: 32,
    },
    phone: {
      type: Number,
      max: 9999999999,
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
