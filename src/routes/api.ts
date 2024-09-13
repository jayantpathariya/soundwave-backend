import express from "express";

import albumsRoutes from "@/routes/albums.route";
import homeRoutes from "@/routes/home.route";
import playlistsRoutes from "@/routes/playlists.route";
import songsRoutes from "@/routes/songs.route";

const api = express.Router();

api.use("/home", homeRoutes);
api.use("/songs", songsRoutes);
api.use("/albums", albumsRoutes);
api.use("/playlists", playlistsRoutes);

export default api;
