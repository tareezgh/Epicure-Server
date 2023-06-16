import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDb = async () => {
  // await mongoose.connect("mongodb://localhost/epicure");
  await mongoose.connect(
    "mongodb+srv://Tareez:ghandour@test.dey18uy.mongodb.net/?retryWrites=true&w=majority"
  );
};
export { connectDb };
