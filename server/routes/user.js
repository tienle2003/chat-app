import express from "express";
const router = express.Router();

import { getUsers, getUserById } from "../controllers/user.js";

router.route("/").get(getUsers);

router.route("/:userId").get(getUserById);

export default router;
