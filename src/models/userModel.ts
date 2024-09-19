import mongoose, {Schema} from "mongoose";
import {IUser} from "../interfaces/userInterface";

const userSchema: Schema = new mongoose.Schema({
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

const User = mongoose.model<IUser>("User", userSchema);

export default User;