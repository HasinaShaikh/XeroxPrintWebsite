
const mongoose = require("mongoose");

const printOrderSchema = new mongoose.Schema(
  {
    shop: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true
    },
    customerName: {
      type: String,
      required: true
    },
    fileName: {
      type: String,
      required: true
    },
    filePath: {
      type: String,
      required: true
    },
    printType: {
      type: String,
      enum: ["black-white", "color"],
      default: "black-white"
    },
    copies: {
      type: Number,
      default: 1,
      min: 1
    },
    paperSize: {
      type: String,
      enum: ["A4", "A3", "Letter"],
      default: "A4"
    },
    sides: {
      type: String,
      enum: ["single", "double"],
      default: "single"
    },
    status: {
      type: String,
      enum: ["pending", "printing", "completed", "cancelled"],
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("PrintOrder", printOrderSchema);
