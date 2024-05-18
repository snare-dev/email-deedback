const express = require("express");
const app = express();

const auth = require("./auth/login");


app.get(
  "/auth/google",
  auth
);

// app.get(
//   "/auth/google/callback",
//   authCallback
// );

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/amani", (req, res) => {
  res.send("hello Amani");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
