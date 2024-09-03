import { getPlaylist } from "@/handlers/playlists.handler";
import express from "express";

const router = express.Router();

router.get("/:playlistId", getPlaylist);

export default router;
