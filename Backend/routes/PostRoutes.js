import express from "express"
import { createpost, getpost,deletepost,likeunlike,replytopost,getfeedposts,getUserPosts } from "../controllers/Postcontroller.js";
import { protectmiddleware } from "../middleware/protectRoute.js";

const router = express.Router()

router
    .get ("/feed",protectmiddleware,getfeedposts)
    .get ("/:id",getpost)
    .get ("/user/:username",getUserPosts)
    .delete ("/:id",protectmiddleware,deletepost)
    .post ("/create",protectmiddleware,createpost)
    .put ("/like/:id",protectmiddleware,likeunlike)
    .put ("/reply/:id",protectmiddleware,replytopost)
    

    export default router;