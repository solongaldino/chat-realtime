import { Room } from "./enums";

export interface Message {
  user: User;
  room: Room;
  message: string;
  created_at: Date;
}

export interface User {
  userName: string;
}
