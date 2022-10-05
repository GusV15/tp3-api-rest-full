import express from "express";
import {
  getBooks,
  postBook,
  putBook,
  deleteBook,
} from "../controller/books.js";

const router = express.Router();

// Routes

/* GET Book/s */
router.get("/:id?", getBooks);

/* POST Book */
router.post("/", postBook);

/* PUT Book */
router.put("/:id", putBook);

/* DELETE Book */
router.delete("/:id", deleteBook);

export default router;
