import mongoose, { Document } from "mongoose";


const dishesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    image: { type: String, required: false },
    restaurant: { type: String, required: true },
    price: { type: Number, required: true },
    signature: { type: String, required: false },
    type: { type: String, required: false },
 },
  { timestamps: true }
);

const Dishes = mongoose.model("Dishes", dishesSchema);

export default Dishes;
