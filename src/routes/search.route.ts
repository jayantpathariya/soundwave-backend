import express from "express";

import {
  searchAlbums,
  searchAll,
  searchArtists,
  searchSongs,
} from "@/handlers/search.handler";

const router = express.Router();

router.get("/", searchAll);

router.get("/songs", searchSongs);

router.get("/albums", searchAlbums);

router.get("/artists", searchArtists);

export default router;
