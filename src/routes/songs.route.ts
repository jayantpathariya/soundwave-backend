import { getSongById, getSongLyrics } from "@/handlers/songs.handler";
import express from "express";

const router = express.Router();

router.get("/:songId", getSongById);
router.get("/:songId/lyrics", getSongLyrics);

export default router;
