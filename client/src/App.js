import React, { useState } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import "./App.css";
import Chat from "./pages/chat";
import Login from "./pages/login";
import Register from "./pages/register";
import ResetPassword from "./pages/forget-password";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Chats from "./pages/components/chats";
import Profile from "./pages/components/profile";
import Groups from "./pages/components/groups";
import Settings from "./pages/components/settings";
import ChatGPT from "./pages/components/chatGPT";

function App() {
  const [selectedContent, setSelectedContent] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />}></Route>
          <Route path="/chats" element={<Chat />}></Route>
          <Route path="/group" element={<Chat />}></Route>
          <Route path="/chat-gpt" element={<Chat />}></Route>
          <Route path="/profile" element={<Chat />}></Route>
          <Route path="/setting" element={<Chat />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forget-password" element={<ResetPassword />}></Route>
          <Route path="*" element={<Navigate to="/" />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
