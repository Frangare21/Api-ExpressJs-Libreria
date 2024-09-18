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

export const updateBookById = async (req: Request, res: Response) => {
    try {
        const { id, name, description, author } = req.body;

        const updateData: any = {};
        if (name) updateData.name = name;
        if (description) updateData.description = description;
        if (author) updateData.author = author;

        if (Object.keys(updateData).length === 0) {
            res.status(400).json({ message: "No fields provided to update" })
        }

        const updatedBook = await BookModel.findByIdAndUpdate(id, updateData, { new: true })

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: `Cannot update the book: ${error}` })
    }
}