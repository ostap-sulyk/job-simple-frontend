import mongoose from "mongoose";

const MONGO_URI = useRuntimeConfig().MONGO_URI;

async function connectToDatabase() {
  await mongoose.connect(MONGO_URI, { dbName: "job-simple" });
}

export default connectToDatabase;
