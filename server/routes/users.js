import express from 'express';
import {
    getUser,
    getUSerFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import {verifyToken} from "../middleware/auth.js";
const router =express.Router();
/*READ */
router.get("/:id",verifyToken,getUser);
router.get("/:id/friends",verifyToken,getUSerFriends);
router.get("/:id/friendId",verifyToken,addRemoveFriend);
export default router;
