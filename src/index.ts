import http from "http";
import app from "./app";

const PORT = 3000;

const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer();
