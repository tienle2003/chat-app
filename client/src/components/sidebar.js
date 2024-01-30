import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import {
  ArrowLeftCircle,
  BrightnessHigh,
  CardHeading,
  Chat,
  Gear,
  Globe,
  Moon,
  People,
  Person,
  Robot,
} from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.css';

import "./sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [mode, setMode] = useState(false);
  const handleToggleMode = () => {
    setMode(!mode);
  };
  const handleToggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const menuItems = [
    { content: "profile", icon: <Person />, href: "/profile" },
    { content: "chats", icon: <Chat />, href: "/chats" },
    { content: "group", icon: <People />, href: "/group" },
    { content: "settings", icon: <Gear />, href: "/setting" },
    { content: "chat GPT", icon: <Robot />, href: "/chat-gpt", offset: [0, 0] },
  ];

  return (
    <>
      <div className="side_menu d-flex flex-column mg-lg-1 text-center">
        <a className="logo" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M4.929 19.071A9.969 9.969 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929zM11 6v12h2V6h-2zM7 9v6h2V9H7zm8 0v6h2V9h-2z"
              fill="rgba(114,105,239,1)"
            />
          </svg>
        </a>
        <div className="flex-column mt-auto mb-auto">
          <ul className="d-flex flex-wrap justify-content-center nav-list">
            <li className="nav-item">
              {menuItems.map((item, index) => (
                <Tippy
                  key={index}
                  offset={[0, -4]}
                  delay={[300, 0]}
                  content={item.content}
                >
                  <NavLink
                    className={(nav) =>
                      `mb-2 nav-link ${nav.isActive ? "is-active" : ""}`
                    }
                    to={item.href}
                  >
                    {item.icon}
                  </NavLink>
                </Tippy>
              ))}
            </li>
          </ul>
        </div>
        <div className="flex-lg-column d-block">
          <ul className="d-flex flex-wrap justify-content-center nav-list">
            <li className="nav-item">
              <a className="mb-2 nav-link">
                <Globe />
              </a>
            </li>
            <li className="nav-item" onClick={handleToggleMode}>
              <Tippy content="Dark/Light mode" placement="right">
                <a className="mb-2 nav-link">
                  {mode ? <BrightnessHigh /> : <Moon />}
                </a>
              </Tippy>
            </li>
            <li className="nav-item" onClick={handleToggleMenu} onBlur={handleToggleMenu}>
              <NavLink className="nav-link">
                <img
                  className="profile-user rounded-circle"
                  src="https://ss-images.saostar.vn/wp700/2019/08/11/5823290/0.jpg"
                ></img>
              </NavLink>
            </li>
            <ul
              className={`dropdown-menu dropdown-position ${
                isMenuVisible ? "show" : ""
              }`}
            >
              <li>
                <NavLink className="dropdown-item" to="/profile">
                  Profile
                  <CardHeading />
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/setting">
                  Settings
                  <Gear />
                </NavLink>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <NavLink className="dropdown-item" to="/login">
                  Sign out
                  <ArrowLeftCircle />
                </NavLink>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
