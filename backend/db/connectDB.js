import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

   console.log(`🚀 MongoDB connected: ${conn.connection.host}:${conn.connection.port}`)
  } catch (error) {
    console.error("❌ Error connecting to MONGODB:", error.message);
    process.exit(1);
  }
}