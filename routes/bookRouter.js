const { Router } = require("express");
const { getBookById } = require("../controllers/bookController");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books"));
bookRouter.get("/:bookId", getBookById);
bookRouter.get("/:bookId/reserve", getBookById);
bookRouter.post("/:bookId/reserve", getBookById);

module.exports = bookRouter;
