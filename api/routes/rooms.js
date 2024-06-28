import express from "express";
import { deleteRoom,getRoom,getallRooms,updateRoom,createRoom} from "../Controllers/roomController.js";
import { verifyAdmin } from "../utils/verifytoken.js";
const router = express.Router();
// Perfroming CRUD Operations
//Create
router.post("/:hotelId",verifyAdmin, createRoom);
//Update
router.put("/:id",verifyAdmin, updateRoom);
//Delete
router.delete("/:id/:hotelId",verifyAdmin,deleteRoom);
//Get
router.get("/:id", getRoom);
//Get all
router.get("/", getallRooms);
export default router