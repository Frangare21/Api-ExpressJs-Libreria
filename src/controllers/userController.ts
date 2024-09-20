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

export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;

        await UserModel.findByIdAndDelete(id).then();
        res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: `Cannot delete the user: ${error}` })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id, full_name, email, password } = req.body;

        const updateData: any = {};
        if (full_name) updateData.full_name = full_name;
        if (email) updateData.email = email;
        if (password) updateData.password = password;

        if (Object.keys(updateData).length === 0) {
            res.status(400).json({ message: "No fields provided to update user" })
        }

        const updatedUser = await UserModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({ message: `Cannot update the user: ${error}` })
    }
}