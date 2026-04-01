import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database connected"),
    );
    await mongoose.connect(`${process.env.MONGODB_URL}/SocialUp`);
  } catch (error) {
    console.log(error.mossage);
  }
};
export default connectDB;
