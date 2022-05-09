const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
    },
    isAvailable: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
    },

    hotelId: {
      type: ObjectId,
      ref: "Hotel",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
