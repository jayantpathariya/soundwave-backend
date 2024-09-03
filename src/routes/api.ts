import express from "express";

import playlistsRoutes from "@/routes/playlists.route";
import songsRoutes from "@/routes/songs.route";

const api = express.Router();

api.use("/songs", songsRoutes);
api.use("/playlists", playlistsRoutes);

export default api;
