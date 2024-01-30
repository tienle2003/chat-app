import React from "react";
import { Search } from "react-bootstrap-icons";
import "./chat.css";
import ChatItem from "./chatItem";


function Chat() {
  return (
    <div className="me-lg-1">
      <div className="px-4 pt-4">
        <h4 className="mb-4 text-center">Chats</h4>
        <div className="mb-3 rounded-3 input-group">
          <span className="input-group-text ">
            <Search />
          </span>
          <input
            className="form-control bg-light"
            type="text"
            placeholder="Search messages or users"
          />
        </div>
      </div>
      <div>
        <h5 className="mb-3 px-3 font-size-16">Recent</h5>
        <ul className="chat-list px-2">
          <li className="chat-item d-flex">
            <div className="chat-user-img align-self-center ms-0">
              <img
                src="https://ss-images.saostar.vn/wp700/2019/08/11/5823290/0.jpg"
                className="rounded-circle avatar"
              />
              <span className="user-status"></span>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <h6 className="text-truncate mb-1 ms-3">Lê Minh Tiến</h6>
                <p className="chat-user-message text-truncate mb-0 ms-3">Hello!!!</p>
            </div>
            <div className="chat-user-time">02:50 PM</div>
          </li>
          <ChatItem/>
          <ChatItem/>
          <ChatItem/>
        </ul>
      </div>
    </div>
  );
}

export default Chat;
