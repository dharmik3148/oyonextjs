import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB Connected ...!!");
};

export default connectDB;
