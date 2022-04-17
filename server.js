const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

app.use(express.json());

const messageRouter = require("./routes/messages");

app.use("/message", messageRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => console.log(`Server started at port ${port}`));
