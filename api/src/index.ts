import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { EnvVariables } from "./utils";

const app = express();

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: { origin: EnvVariables.getUrlAppFrontEnd() },
});

app.use(cors());

const serverPort = EnvVariables.getServerPort();

app.listen(serverPort, () =>
  console.log(`Server is running on PORT ${serverPort}`)
);
