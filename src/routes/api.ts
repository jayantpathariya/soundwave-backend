import express from "express";

import songRoutes from "@/routes/song.route";

const api = express.Router();

api.use("/songs", songRoutes);

export default api;
