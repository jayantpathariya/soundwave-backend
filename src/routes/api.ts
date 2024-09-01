import express from "express";

const api = express.Router();

api.use("/test", (req, res, next) => {
  return res.json({ message: "Hello World" });
});

export default api;
