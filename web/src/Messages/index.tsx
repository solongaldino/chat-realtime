import { IMessage } from "../App";
import "./Messages.css";

interface IProps {
  messages: IMessage[];
}

const Messages = ({ messages }: IProps) => {
  return (
    <div className="messages-container">
      {messages.map((item, index) => (
        <p key={index}>
          <strong>{item.user.userName}: </strong>
          {item.message}
        </p>
      ))}
    </div>
  );
};
export default Messages;
