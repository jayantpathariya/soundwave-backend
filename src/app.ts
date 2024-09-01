import express from "express";
import morgan from "morgan";

import api from "@/routes/api";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", api);

export default app;
