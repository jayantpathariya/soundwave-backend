import { getSongById } from "@/handlers/songs.handler";
import express from "express";

const router = express.Router();

router.get("/:songId", getSongById);

export default router;
