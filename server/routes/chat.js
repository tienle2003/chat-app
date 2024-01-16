import express from "express";

import { createChat, findUserChats, findChat } from "../controllers/chat.js";
const router = express.Router();

router.route("/").post(createChat);
router.route("/:userId").get(findUserChats);
router.route("/:senderId/:receiverId").get(findChat);

export default router;
