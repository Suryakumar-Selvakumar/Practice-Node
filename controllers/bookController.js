const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getBookById = asyncHandler(async (req, res) => {
  const { bookId } = req.params;

  const book = await db.getBookById(Number(bookId));

  if (!book) {
    throw new CustomNotFoundError("Book not found");
  }

  if (/reserve/.test(req.path)) {
    if (req.method === "GET") {
      res.send(`Book Name: ${book.name} - Reserved - GET`);
    } else if (req.method === "POST") {
      res.send(`Book Name: ${book.name} - Reserved - POST`);
    }
  } else {
    res.send(`Book Name: ${book.name}`);
  }
});

module.exports = { getBookById };
