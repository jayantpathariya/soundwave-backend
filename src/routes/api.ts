import express from "express";

import homeRoutes from "@/routes/home.route";
import playlistsRoutes from "@/routes/playlists.route";
import songsRoutes from "@/routes/songs.route";

const api = express.Router();

api.use("/songs", songsRoutes);
api.use("/playlists", playlistsRoutes);
api.use("/home", homeRoutes);

export default api;
