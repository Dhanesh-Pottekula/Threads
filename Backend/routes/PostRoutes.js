import express from "express"
import { createpost, getpost,deletepost,likeunlike,replytopost,getfeedposts } from "../controllers/Postcontroller.js";
import { protectmiddleware } from "../middleware/protectRoute.js";

const router = express.Router()

router
    .get ("/feed",protectmiddleware,getfeedposts)
    .get ("/:id",getpost)
    .delete ("/:id",protectmiddleware,deletepost)
    .post ("/create",protectmiddleware,createpost)
    .post ("/like/:id",protectmiddleware,likeunlike)
    .post ("/reply/:id",protectmiddleware,replytopost)
    

    export default router;