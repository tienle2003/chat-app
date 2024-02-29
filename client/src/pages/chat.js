import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Content from "../components/content";
import UserChats from "../components/user-chat";


const Chat = () => {
  const containerFlex = {
    display: "flex"
  };

  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="chat-container" style={containerFlex}>
      <Sidebar handleTabChange={handleTabChange} activeTab={activeTab} />
      <Content activeTab={activeTab} />
      <UserChats />
    </div>
  );
};

export default Chat;
