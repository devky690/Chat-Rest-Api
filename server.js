const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");

app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => console.log(`Server started at port ${port}`));
