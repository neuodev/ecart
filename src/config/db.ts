import mongoose from "mongoose";

const connectDB = async () => {
  try {
    let uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error(
        "Missing mongo URI\nTry to use docker `docker-compose up -d` then add this `MONGO_URI=mongodb://localhost/wallet` to your `.env`"
      );
    }

    console.log(`[uri] ${uri}`);

    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
