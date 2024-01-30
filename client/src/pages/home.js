import React from "react";
import Sidebar from "../components/sidebar";
import Chat from "../components/chat";

const Home = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{width: "380px"}}>
      <Chat/>

      </div>
      chat
    </div>
  );
};

export default Home;
