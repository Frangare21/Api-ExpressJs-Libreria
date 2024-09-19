import { Request, Response } from "express";
import UserModel from "../models/userModel";
import User from "../models/userModel";


export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: `Cannot found any users in database: ${error}` })
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const { full_name, email, password } = req.body;

        const newUser = new User({
            full_name,
            email,
            password
        });

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: `Error creating the user: ${error}` })
    }
};