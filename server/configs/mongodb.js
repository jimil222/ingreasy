import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");

    mongoose.connection.on("connected", () => {
      console.log("Mongoose connection event fired");
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message); 
    process.exit(1);
  } 
};

export default connectDB;
