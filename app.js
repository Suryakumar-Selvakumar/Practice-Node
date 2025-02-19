const express = require("express");
const path = require("node:path");
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const app = express();

// set views path
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set assets path
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
// app.use("/", indexRouter);

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.get("/about", (req, res) => {
  res.render("about", { links: links, users: users });
});

// Every thrown error in the application or the previous middleware
// calling `next` with an error as an argument will eventually
// go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify  the `err.statusCode` that exists
  // in our custom error class and if it does not exist
  // its probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
