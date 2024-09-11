import "dotenv/config";

import http from "http";
import app from "./app";

const PORT = process.env.PORT ?? 3000;

console.log(PORT);

const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer();
