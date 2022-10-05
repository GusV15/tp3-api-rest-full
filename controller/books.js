import {
  findBooks,
  saveBook,
  actualizeBook,
  removeBook,
} from "../api/books.js";

const getBooks = (req, res) => {
  const { id } = req.params;
  res.json(findBooks(id));
};

const postBook = (req, res) => {
  const book = req.body;
  res.json(saveBook(book));
};

const putBook = (req, res) => {
  const { id } = req.params;
  const book = req.body;
  res.json(actualizeBook(id, book));
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  res.json(removeBook(id));
};
export { getBooks, postBook, putBook, deleteBook };
