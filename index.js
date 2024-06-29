const express = require("express");
const path = require("path");
const app = express();
const ejsMate = require("ejs-mate");
const PORT = process.env.port || 3000;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.get("/scholarship", (req, res) => {
  res.render("scholarship.ejs");
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
