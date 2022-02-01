import mongoose from "mongoose";

export const CarSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  HP: {
    type: Number,
    default: 0,
  },
});

export const Car = mongoose.model("Car", CarSchema);
