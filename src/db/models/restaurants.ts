import mongoose from "mongoose";

const restaurantsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    chefName: { type: String, required: true },
    restaurantRating: { type: Number, required: true },
    isPopular: { type: Boolean, required: true },
    isNewRestaurant: { type: Boolean, required: true },
    isOpen: { type: Boolean, required: true },
    address: { type: String, required: false },
    image: { type: String, required: false },
    openingHours: { type: Array, required: false },
  },
  { timestamps: true }
);

const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

export default Restaurants;
