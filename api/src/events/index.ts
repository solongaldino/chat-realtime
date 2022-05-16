import { Server } from "socket.io";
import { MessageRepository } from "../repositories";
import messageEvent from "./message";
import messagesEvent from "./messages";

const mainEvent = async (io: Server) => {
  io.on("connect", (socket) => {
    messageEvent(socket);
    messagesEvent(socket);
  });

  // const cursor = await MessageRepository.changes()

  // cursor.each(async (err, data) =>{
  //   messagesEvent(io.s)
  // });
};

export default mainEvent;
