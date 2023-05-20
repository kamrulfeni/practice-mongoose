import express from "express";
import { createUser, getAdminUsers, getStudentUsers, getUserById, getUsers } from "./user.controller";
const router = express.Router();




router.get("/", getUsers);
router.get("/students", getStudentUsers);
router.get("/admins", getAdminUsers);
router.get("/:id", getUserById);
router.post("/create-user", createUser);

// from controller
export default router;