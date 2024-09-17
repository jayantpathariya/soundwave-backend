import express from "express";

import { searchAll, searchSongs } from "@/handlers/search.handler";

const router = express.Router();

router.get("/", searchAll);

router.get("/songs", searchSongs);

export default router;
