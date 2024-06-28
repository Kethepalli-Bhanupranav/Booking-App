import express from "express";
import { updateUser,deleteUser, getUser, getallUser } from "../Controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifytoken.js";
const router = express.Router();
// Perfroming CRUD Operations
// router.get("/checkautentication",verifyToken,(req,res,next)=>{
//     res.send("Hello Sir you are back")
// })
// router.get("/checkUser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello Sir you are back and now you can't delete")
// })
// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello Admin you can do whatever you want")
// })
//Update
router.put("/:id",verifyUser, updateUser);
//Delete
router.delete("/:id",verifyUser,deleteUser);
//Get
router.get("/:id",verifyUser, getUser);
//Get all
router.get("/",verifyAdmin, getallUser);
export default router