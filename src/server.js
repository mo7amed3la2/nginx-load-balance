const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) =>
  res.send(`Welcome you are lestening on port ${port}`)
);

app.get("/login", (req, res) => res.send(`Welcome you are in login page`));

app.get("/register", (req, res) => res.send(`Welcome you are in register page`));

app.get("/contact", (req, res) => res.send(`Welcome you are in contact page`));

app.listen(port, () => {
  console.log(`App Lestening on port ${port}`);
});


