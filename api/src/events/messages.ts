import { Socket } from "socket.io";
import { Event } from "../enums";
import { MessageRepository } from "../repositories";

const messagesEvent = async (socket: Socket) => {
  const messages = await MessageRepository.getAll();
  const cursor = await MessageRepository.changes();

  cursor.each(async (err, data) => {
    socket.emit(Event.messages, await MessageRepository.getAll());
  });

  socket.emit(Event.messages, messages);
};

export default messagesEvent;
