import { IMessage } from "../App";

interface IProps {
  messages: IMessage[];
}

const Messages = ({ messages }: IProps) => {
  return (
    <div className="messages-container">
      {messages.map((item) => (
        <p>
          <strong>{item.userName}:</strong>
          {item.message}
        </p>
      ))}
    </div>
  );
};
export default Messages;
