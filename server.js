import express from "express";
import routerBooks from "./router/books.js";

const app = express();

// Express configuration
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root Route
app.use("/api/books", routerBooks);

// Set PORT
const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}`)
);
server.on("error", (error) => `Server error: ${error.message}`);
