import React from "react";
import "./content.css";
import Profile from "../pages/components/profile";
import Chats from "../pages/components/chats";
import Groups from "../pages/components/groups";
import Contact from "../pages/components/contacts";
import Settings from "../pages/components/settings";
import ChatGPT from "../pages/components/chatGPT";

const Content = () => {
    return (
        <div className="content chat-leftsidebar me-lg-1">
            <div className="tab-content">
                <Profile></Profile>
                <Chats></Chats>
                <Groups></Groups>
                <Contact></Contact>
                <Settings></Settings>
                <ChatGPT></ChatGPT>
            </div>
        </div>
    );
};

export default Content;
