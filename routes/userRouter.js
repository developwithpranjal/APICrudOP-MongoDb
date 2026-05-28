import express from "express";
import {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  bulkCreate,
} from "../controller/usercontroller.js";

const router = express.Router();

router.get("/", getAllUser);

router.post("/users", createUser);

router.post("/users/bulk", bulkCreate);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

export default router;