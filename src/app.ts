import express from "express";
import {connectDb} from "./config/dbConfig";
import bookRoutes from "./routes/bookRoutes";
import userRoutes from "./routes/userRoutes";
require('dotenv').config();

export function initializeServer(port: any, dbUrl: string) {
    const app = express();
    app.use(express.json())

    connectDb(dbUrl).then(() => console.log("Connection established with DB!"));

    app.use("/api", bookRoutes, userRoutes);

    //Example route for the API
    app.get('/', (req, res) => {
        res.send("Hello world!")
    })

    app.listen(port, () => {
        console.log(`🚀 Query endpoint ready at: http://localhost:${port}`)
    })
}