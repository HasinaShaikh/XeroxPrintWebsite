
const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    shopCode: {
      type: String,
      required: true,
      unique: true
    },
    qrCodeUrl: {
      type: String,
      default: ""
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shop", shopSchema);
