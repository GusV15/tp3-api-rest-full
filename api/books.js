import {
  selectBook,
  selectBooks,
  insertBook,
  updateBook,
  deleteBook,
} from "../model/books.js";

const findBooks = (id) => (id ? selectBook(id) : selectBooks());

const saveBook = (book) => {
  return insertBook(book);
};

const actualizeBook = (id, book) => {
  return updateBook(id, book);
};

const removeBook = (id) => {
  return deleteBook(id);
};

export { findBooks, saveBook, actualizeBook, removeBook };
