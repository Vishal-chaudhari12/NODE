require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("ACCESS-CONTROL-ALLOW-ORIGIN", "*");
  res.setHeader("ACCESS-CONTROL-ALLOW-HEADERS", "*");
  next();
});

// import routes
const userRoute = require("./api/user/user.route");

mongoose
  .connect(
    `mongodb+srv://${process.env.Db_username}:${process.env.Db_pass}@cluster0.4bmfh.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log("Failed to connect", err));

// user route registered
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
