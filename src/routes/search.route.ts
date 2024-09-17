import express from "express";

import {
  searchAlbums,
  searchAll,
  searchSongs,
} from "@/handlers/search.handler";

const router = express.Router();

router.get("/", searchAll);

router.get("/songs", searchSongs);

router.get("/albums", searchAlbums);

export default router;
