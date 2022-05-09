const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema(
  {
    itemId: {
      type: ObjectId,
      ref: "Item",
      required: true,
    },
    userId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    isPaid: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
