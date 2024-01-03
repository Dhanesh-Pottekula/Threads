import express from "express";
import {signUpuser,loginUser,logoutUser,followandunfollowuser,updateUser,getUserProfile} from "../controllers/userController.js";
import { protectmiddleware } from "../middleware/protectRoute.js";

const router = express.Router();

router
.get('/profile/:username',getUserProfile)
.post('/signup',signUpuser)
.post('/login',loginUser)
.post ("/logout",logoutUser)
.post('/follow/:id',protectmiddleware,followandunfollowuser)
.put('/update/:id',protectmiddleware,updateUser)
export default router;