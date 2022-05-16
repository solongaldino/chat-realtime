import "./App.css";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import Messages from "./Messages/index";

export interface IMessage {
  user: { userName: string };
  message: string;
}

function App() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  const socket = io("http://localhost:3333");

  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  useEffect(() => {
    socket.on("messages", (data) => {
      if (messages.length === 0 || messages.length !== data.length) {
        setMessages(data);
      }
    });
  }, [socket]);

  function sendMessage() {
    if (username === "") {
      alert("Not username null");
      return;
    }
    if (message === "") {
      alert("Not message null");
      return;
    }
    socket.emit("message", {
      message: message,
      userName: username,
    });
    setMessage("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Surf Chat!</h1>
        <Messages messages={messages} />
        <label style={{ color: "blueviolet" }}>UserName</label>
        <input
          id="username"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label style={{ color: "green" }}>Message</label>
        <textarea
          id="message"
          rows={10}
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <br />
        <button type="button" onClick={sendMessage}>
          Send Message
        </button>
        <br />
        <br />
      </header>
    </div>
  );
}

export default App;
