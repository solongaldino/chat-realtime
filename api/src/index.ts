import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import { EnvVariables, Rethinkdb } from "./utils";
import mainEvent from "./events";

const app = express();

const serverHttp = createServer(app);

const io = new Server(serverHttp, {
  cors: { origin: EnvVariables.getUrlAppFrontEnd() },
});

app.use(cors());

Rethinkdb.init();

mainEvent(io);

const serverPort = EnvVariables.getServerPort();

serverHttp.listen(3333, () =>
  console.log(`Server is running on PORT ${serverPort}`)
);
