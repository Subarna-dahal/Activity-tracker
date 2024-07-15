const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require('mongoose');

const PORT = Number(process.env.PORT) || 8000;
const indexrouter = require("./Routes/index");

app.use(express.json());
app.use("/", indexrouter);

app.use((err, req, res, next) => {
  const errmsg = err.toString() || "Something went wrong here";
  res.status(500).json({ msg: errmsg });
});

mongoose.connect(process.env.DATABASEURL).then(() => {
  console.log('Database connected successfully');
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
