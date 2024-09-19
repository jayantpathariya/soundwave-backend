import { getArtistById, getArtistSongs } from "@/handlers/artist.handler";
import express from "express";

const router = express.Router();

router.get("/:id", getArtistById);

router.get("/:id/songs", getArtistSongs);

export default router;
