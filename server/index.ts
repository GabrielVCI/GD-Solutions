import { createServer } from "http";
import { createApp } from "./app";
import { env } from "./config/env";

async function startServer() {
  const app = createApp();
  const server = createServer(app);

  server.listen(env.port, () => {
    console.log(`Server running on http://localhost:${env.port}/`);
  });
}

startServer().catch(console.error);
