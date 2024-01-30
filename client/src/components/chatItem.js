import React from "react";
import "./chat.css";

function ChatItem() {
  return (
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
  );
}

export default ChatItem;
