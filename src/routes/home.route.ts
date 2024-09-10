import { getHomeData } from "@/handlers/home.handler";
import express from "express";

const router = express.Router();

router.get("/", getHomeData);

export default router;
