import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import "./App.css";
import Chat from "./pages/chat";
import Login from "./pages/login";
import Register from "./pages/register";
import Sidebar from "./components/sidebar";

function App() {
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
          <Route path="*" element={<Navigate to="/" />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
