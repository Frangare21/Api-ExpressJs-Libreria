import express from "express";
import {createUser, deleteUserById, getUsers, updateUser} from "../controllers/userController";


const router = express.Router();

router.post("/create-user", createUser)
router.get("/users", getUsers)
router.delete("delete-user", deleteUserById)
router.put("update-user", updateUser)

export default router;