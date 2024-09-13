import express from "express";

import { searchAll } from "@/handlers/search.handler";

const router = express.Router();

router.get("/", searchAll);

export default router;
