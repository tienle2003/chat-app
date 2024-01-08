const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");

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

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/auth/", authRouter);
