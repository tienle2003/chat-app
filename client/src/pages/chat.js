import React from "react";
import Sidebar from "../components/sidebar";
import Content from "../components/content";


const Chat = ({ children }) => {
  return (
    <div className="chat-container">
      <Sidebar />
      <Content>
        {children}
      </Content>
    </div>
  );
};

export default Chat;
