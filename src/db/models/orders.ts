import mongoose, { Document } from "mongoose";

const ordersSchema = new mongoose.Schema(
  {
    restaurant: { type: String, required: true },
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    side: { type: String, required: true },
    changes: { type: Array, required: false },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

const Orders = mongoose.model("Orders", ordersSchema);

export default Orders;
