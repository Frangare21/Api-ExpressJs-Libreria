import { Request, Response } from "express";
import Book from "../models/bookModel";
import BookModel from "../models/bookModel";
import bookModel from "../models/bookModel";

export const getBooks = async (req: Request, res: Response) => {
    try {
        const books = await bookModel.find();
        res.status(201).json(books)
    } catch (error) {
        res.status(500).json({ message: `Cannot found any books` });
    }
}

export const createBook = async (req: Request, res: Response) => {
    try {
        const { name, description, author } = req.body;

        const newBook = new Book({
            name,
            description,
            author
        });

        const savedBook = await newBook.save();

        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({ message: `Error creating the book: ${error}` });
    }
};

export const deleteBookById = async (req: Request, res: Response) => {
    try {
        const { id } = req.body

        await BookModel.findByIdAndDelete(id).then();
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: `Error deleting the book: ${error}` })
    }
}