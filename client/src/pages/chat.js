import React from "react";
import Sidebar from "../components/sidebar";
import Content from "../components/content";

const Chat = () => {
  return (
    <div className="chat-container">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Chat;
