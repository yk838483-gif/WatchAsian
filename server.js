import express from "express";
import config from "./config.js";
import { printWelcome, logger } from "./utils/log.js";
import showsRouter from "./routes/shows.js";
import otherRouter from "./routes/others.js";

const server = express();

// parse request's body as JSON
server.use(express.json());

// register routes
server.use("/", otherRouter)
server.use("/shows", showsRouter);

// Start Server (Modified for Hugging Face)
const port = process.env.PORT || 7860;

server.listen(port, '0.0.0.0', () => {
    printWelcome();
    logger.info(`Server is running on port ${port}`);
});
