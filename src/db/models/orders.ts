import mongoose, { Document } from "mongoose";

const ordersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const Orders = mongoose.model("Orders", ordersSchema);

export default Orders;
