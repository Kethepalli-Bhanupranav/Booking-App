import express, { json } from "express";
import Hotel from "../models/Hotel.js";
import { creatError } from "../utils/error.js";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getall, updateHotel } from "../Controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifytoken.js";
const router = express.Router();
// Perfroming CRUD Operations
//Create
router.post("/",verifyAdmin, createHotel);
//Update
router.put("/:id",verifyAdmin, updateHotel);
//Delete
router.delete("/:id",verifyAdmin,deleteHotel);
//Get
router.get("/find/:id", getHotel);
//Get all
router.get("/", getall);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
export default router;