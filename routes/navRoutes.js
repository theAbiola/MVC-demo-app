import express from "express";
import { getAbout } from "../controllers/navControllers.js";
import { getContact } from "../controllers/navControllers.js";

const router = express.Router();

router.get("/about", getAbout);

router.get("/contact", getContact);

export default router;