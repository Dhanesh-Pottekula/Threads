import express from "express";
import {signUpuser,loginUser,logoutUser,followandunfollowuser} from "../controllers/userController.js";
import { protectmiddleware } from "../middleware/protectRoute.js";

const router = express.Router();

router.post('/signup',signUpuser)
.post('/login',loginUser)
.post ("/logout",logoutUser)
.post('/follow/:id',protectmiddleware,followandunfollowuser)
export default router;