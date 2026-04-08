process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION:", err);
});

import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connectDB from "./config/db";

console.log("HELLO SERVER START");

const startServer = async () => {
  try {
    console.log("Starting server...");

    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("FATAL ERROR:", error);
  }
};

startServer();