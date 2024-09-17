import mongoose, {Schema} from "mongoose";
import {IBook} from "../interfaces/bookInterface";

const bookSchema: Schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true }
});

const Book = mongoose.model<IBook>("Book", bookSchema);

export default Book;
