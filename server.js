import express from "express";
import config from "./config.js";
import { printWelcome, logger, WELCOME_BANNER } from "./utils/log.js";
import showsRouter from "./routes/shows.js";
import otherRouter from "./routes/others.js";

const server = express();

// parse request's body as JSON
server.use(express.json());

// register routes
server.use("/", otherRouter)
server.use("/shows", showsRouter);

// REMOVED: server.listen(...)
// ADDED: Export for Vercel
export default server;
