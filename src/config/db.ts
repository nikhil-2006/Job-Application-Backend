import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB Connected 🚀");
  } catch (error) {
    console.error("DB Error:", error);
    throw error;
  }
};

export default connectDB;
