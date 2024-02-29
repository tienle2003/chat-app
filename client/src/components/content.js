import React, { useState, useEffect } from "react";
import "./content.css";
import "../pages/css/pages-common.css";
import Profile from "../pages/components/profile";
import Chats from "../pages/components/chats";
import Groups from "../pages/components/groups";
import Contact from "../pages/components/contacts";
import Settings from "../pages/components/settings";
import ChatGPT from "../pages/components/chatGPT";

const Content = ({ activeTab }) => {
    const contentData = [
        { id: "pills-users", component: <Profile />, title: "users" },
        { id: "pills-chats", component: <Chats />, title: "chats" },
        { id: "pills-groups", component: <Groups />, title: "groups" },
        { id: "pills-contacts", component: <Contact />, title: "contacts" },
        { id: "pills-settings", component: <Settings />, title: "settings" },
        { id: "pills-chatgpt", component: <ChatGPT />, title: "chatgpt" }
    ];

    const activeComponent = contentData[activeTab]?.component || null;

    return (
        <div className="content chat-leftsidebar me-lg-1">
            <div className="tab-content">
                {activeComponent}
            </div>
        </div>
    );
};

export default Content;
