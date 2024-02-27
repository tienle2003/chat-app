import React from "react";
import Sidebar from "../components/sidebar";
import Content from "../components/content";
import UserChats from "../components/user-chat";


const Chat = () => {
  const containerFlex = {
    display: "flex"
  };

  return (
    <div className="chat-container" style={containerFlex}>
      <Sidebar  />
      <Content  />
      <UserChats />
    </div>
  );
};

export default Chat;
