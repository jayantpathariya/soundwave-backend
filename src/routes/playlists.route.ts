import { getPlaylistById } from "@/handlers/playlists.handler";
import express from "express";

const router = express.Router();

router.get("/:playlistId", getPlaylistById);

export default router;
