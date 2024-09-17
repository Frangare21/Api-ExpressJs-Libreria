import { Request, Response } from "express";
import Book from "../models/bookModel";

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
        res.status(500).json({ message: `Error al crear el libro: ${error}` });
    }
};
