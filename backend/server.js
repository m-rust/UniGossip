import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
dotenv.config();
import { connectDB } from "./config/db.js";

const app = express();

// app.get("/login", (req, res) => {});
const PORT = process.env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at port: ${PORT}`);
});
