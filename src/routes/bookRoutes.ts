import express from "express";
import {createBook, deleteBookById, getBooks, updateBookById} from "../controllers/bookController";

const router = express.Router();

router.post("/create-book", createBook)
router.delete("/delete-book", deleteBookById)
router.get("/books", getBooks)
router.put("/update-book", updateBookById)

export default router;