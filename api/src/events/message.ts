import { Socket } from "socket.io";
import { Event, Room } from "../enums";
import { MessageRepository } from "../repositories";

const messageEvent = (socket: Socket) => {
  socket.on(Event.message, (data) => {
    MessageRepository.create({
      message: data.message,
      room: Room.surf,
      user: { userName: data.userName },
      created_at: new Date(),
    });
  });
};

export default messageEvent;
