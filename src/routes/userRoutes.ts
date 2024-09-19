import express from "express";
import {createUser, getUsers} from "../controllers/userController";


const router = express.Router();

router.post("/create-user", createUser)
router.get("/users", getUsers)

export default router;