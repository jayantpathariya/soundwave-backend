import express from "express";

import {
  searchAlbums,
  searchAll,
  searchArtists,
  searchPlaylists,
  searchSongs,
} from "@/handlers/search.handler";

const router = express.Router();

router.get("/", searchAll);

router.get("/songs", searchSongs);

router.get("/albums", searchAlbums);

router.get("/artists", searchArtists);

router.get("/playlists", searchPlaylists);

export default router;
