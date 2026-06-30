import mongoose from "mongoose";

export const connectDB = async ()=> {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.warn("No MONGO_URI provided in .env, skipping database connection.");
    return;
  }
  await mongoose.connect(uri)
  .then(() => {console.log("DB connected")})
}

