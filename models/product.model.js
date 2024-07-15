import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  bgColor: {
    type: String,
    required: true
  },
  panelColor: {
    type: String,
  },
  textColor: {
    type: String,
  },
});

export const Product = mongoose.model("product", productSchema);
