import mongoose, { Document } from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", usersSchema);

export default Users;
