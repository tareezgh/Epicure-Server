import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    orders: { type: Array, required: false },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", usersSchema);

export default Users;
