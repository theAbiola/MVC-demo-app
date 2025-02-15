import express from "express";
import { getAbout, getContact } from "../controllers/navController.js";

const router = express.Router();

router.get("/about", getAbout);

router.get("/contact", getContact);

export default router;