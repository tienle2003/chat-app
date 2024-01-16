import express from "express";

import { createMessage, getMessages } from "../controllers/message.js";
const router = express.Router();

router.route("/").post(createMessage);
router.route("/:chatId").get(getMessages);

export default router;
