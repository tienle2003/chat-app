import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chats" element={<Home />}></Route>
          <Route path="/group" element={<Home />}></Route>
          <Route path="/chat-gpt" element={<Home />}></Route>
          <Route path="/setting" element={<Home />}></Route>
          <Route path="/profile" element={<Home />}></Route>
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
