const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  discountPercentage: Number,
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [5, "wrong max rating"],
    default: 0,
  },
  stock: Number,
  brand: { type: String, required: true },
  category: { type: String, required: true },
});

exports.Product = mongoose.model("Product", productSchema);
