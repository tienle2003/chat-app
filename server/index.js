import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
const port = process.env.PORT || 3000;

import initRoutes from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected succesfully");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

initRoutes(app);
