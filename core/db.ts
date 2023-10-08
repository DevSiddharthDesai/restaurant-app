import mongoose from "mongoose";
import config from "./config";

const data = config.DB_URL as string;

// Connecting to the database
const connectDB = () => {
  mongoose
    .connect(data)
    .then(() => {
      console.log("Successfully connected to the database" + data);
    })
    .catch((err) => {
      console.log("Could not connect to the database. Exiting now...", err);
      process.exit();
    });
};

export default connectDB;
