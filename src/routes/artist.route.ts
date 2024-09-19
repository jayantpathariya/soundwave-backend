import { getArtistById } from "@/handlers/artist.handler";
import express from "express";

const router = express.Router();

router.get("/:id", getArtistById);

export default router;
