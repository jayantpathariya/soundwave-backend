import express from "express";

import albumsRoutes from "@/routes/albums.route";
import artistsRoutes from "@/routes/artist.route";
import homeRoutes from "@/routes/home.route";
import playlistsRoutes from "@/routes/playlists.route";
import searchRoutes from "@/routes/search.route";
import songsRoutes from "@/routes/songs.route";

const api = express.Router();

api.use("/home", homeRoutes);
api.use("/songs", songsRoutes);
api.use("/search", searchRoutes);
api.use("/albums", albumsRoutes);
api.use("/artists", artistsRoutes);
api.use("/playlists", playlistsRoutes);

export default api;
