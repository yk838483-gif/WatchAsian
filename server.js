import express from "express";
import config from "./config.js";
import { printWelcome, logger, WELCOME_BANNER } from "./utils/log.js";
import showsRouter from "./routes/shows.js";
import otherRouter from "./routes/others.js";

const server = express();

server.use(express.json());

server.use("/", otherRouter)
server.use("/shows", showsRouter);

// CRITICAL: Do not use server.listen(). 
// Export the app for Vercel to handle.
export default server;
// ... (your existing code) ...

server.use("/", otherRouter);
server.use("/shows", showsRouter);

// Export for Vercel (Do not use app.listen)
export default server;
