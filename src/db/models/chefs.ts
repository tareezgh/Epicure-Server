import mongoose, { Document } from "mongoose";

const chefsSchema = new mongoose.Schema(
  {
    chefName: { type: String, required: true },
    description: { type: String, required: false },
    image: { type: String, required: false },
    restaurants: { type: Array, required: false },
    isNewChef: { type: Boolean, required: false },
    isViewed: { type: Boolean, required: false },
    isChefOfTheWeek: { type: Boolean, required: false },
  },
  { timestamps: true }
);

const Chefs = mongoose.model("Chefs", chefsSchema);

export default Chefs;
