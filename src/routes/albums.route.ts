import { getAlbumById } from "@/handlers/albums.handler";
import express from "express";

const router = express.Router();

router.get("/:id", getAlbumById);

export default router;
