import mongoose from "mongoose";


export async function connectDb(url: string) {
    try{
        await mongoose.connect(url)
    } catch (e) {
        throw new Error(`Cannot connect to DB: ${e}`)
    }
}

