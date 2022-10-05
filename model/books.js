import { books } from "../mooks/books.js";

const selectBooks = (_) => books;

const selectBook = (id) => books.find((book) => book.id === +id);

const insertBook = (book) => {
  book.year = +book.year;
  const id = books[books.length - 1].id + 1;
  book.id = id;
  books.push(book);
  return books;
};

const updateBook = (id, book) => {
  book.id = +id;
  const index = books.findIndex((book) => book.id === +id);
  books.splice(index, 1, book);
  return book;
};

const deleteBook = (id) => {
  const index = books.findIndex((book) => book.id === +id);
  const book = books.splice(index, 1)[0];
  return book;
};

export { selectBook, selectBooks, insertBook, updateBook, deleteBook };
