const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Db = "mongodb://localhost:tryingDB";

const port = process.env.PORT || 3000;

const app = express();

mongoose
  .connect(Db, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connectd ....");
  });

app.get("/", (req, res) => {
  res.status(200).send("here we are ..!");
});

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on port ${3000}`);
});
