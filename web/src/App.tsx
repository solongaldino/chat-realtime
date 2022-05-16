import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import Messages from "./Messages/index";

export interface IMessage {
  userName: string;
  message: string;
}

function App() {
  const [count, setCount] = useState<number>(0);

  const [messages, setMessages] = useState<IMessage[]>([]);

  const socket = io("http://localhost:3333");

  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  useEffect(() => {
    socket.on("messages", (data) => {
      setMessages(data);
    });
  }, [socket]);

  function sendMessage() {
    setCount(count + 1);
    socket.emit("message", {
      message: `Teste de msg numero: ${count}`,
      userName: "surfista",
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Surf Chat!</h1>
        <p>
          <button type="button" onClick={sendMessage}>
            olá
          </button>
        </p>
        <Messages messages={messages} />
      </header>
    </div>
  );
}

export default App;
