import Document from "mongoose";

export interface IBook extends Document {
    name: string;
    description: string;
    author: string;
}