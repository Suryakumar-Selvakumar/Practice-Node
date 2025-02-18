const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

const books = [
  { id: 1, name: "To Kill a Mockingbird" },
  { id: 2, name: "The Lord of the Rings" },
  { id: 3, name: "Pride and Prejudice" },
];

async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

async function getBookById(bookId) {
  return books.find((book) => book.id === bookId);
}

module.exports = { getAuthorById, getBookById };
