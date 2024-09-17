import express from "express";
import {connectDb} from "./config/dbConfig";
import bookRoutes from "./routes/bookRoutes";
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

connectDb(process.env.DB_URL).then(r => console.log("Connection established with DB!"));

app.use("/api", bookRoutes);

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.listen(port, () => {
    console.log(`🚀 Query endpoint ready at: http://localhost:${port}`)
})


