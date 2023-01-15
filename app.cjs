const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
app.use(express.json());

// solving cors problem
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get("/", function (req, res) {
  res.json({ msg: "response from the backend" });
});

const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
