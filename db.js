import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://dharmiknavadiya4:dharmik321@cluster0.q8shm7m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB Connected ...!!");
};

export default connectDB;
