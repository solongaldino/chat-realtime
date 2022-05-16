import { Server } from "socket.io";
import messageEvent from "./message";

const mainEvent = (io: Server) => {
  io.on("connect", (socket) => {
    messageEvent(socket);
  });
};

export default mainEvent;
