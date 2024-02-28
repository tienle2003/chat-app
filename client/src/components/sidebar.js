import React, { useState, useRef, useEffect } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import {
  ArrowLeftCircle,
  BrightnessAltHigh,
  BrightnessHigh,
  CardHeading,
  Chat,
  Gear,
  Globe,
  Moon,
  People,
  Person,
  PersonLinesFill,
  Robot,
} from "react-bootstrap-icons";

function Sidebar() {
  const dropStyle = {
    position: "absolute",
    inset: "auto auto 0px 0px",
    transform: "translate(0px,-64px)"
  };

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [mode, setMode] = useState(false);

  const handleToggleMode = () => {
    setMode(!mode);
  };

  const handleToggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const dropdownRef = useRef(null);
  const handleDocumentClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const menuItems = [
    { content: "Profile", subcontent: "user", icon: <Person />, href: "/profile" },
    { content: "Chats", subcontent: "chat", icon: <Chat />, href: "/chats" },
    { content: "Groups", subcontent: "group", icon: <People />, href: "/group" },
    { content: "Contacts", subcontent: "contact", icon: <PersonLinesFill />, href: "/contacts" },
    { content: "Settings", subcontent: "setting", icon: <Gear />, href: "/setting" },
    { content: "Chat GPT", subcontent: "chatgpt", icon: <Robot />, href: "/chat-gpt", offset: [0, 0] },
  ];

  return (
    <>
      <div className="side_menu d-flex flex-column mg-lg-1 text-center ">
        <a className="logo" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="35"
            height="35"
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
            {menuItems.map((item, index) => (
              <li className="nav-item nav-item-symbols" id={item.content}>
                <Tippy
                  key={index}
                  offset={[0, -4]}
                  delay={[300, 0]}
                  content={item.content}
                >
                  <NavLink id={`pills-${item.subcontent}-tab`}
                    className={(nav) =>
                      `mb-2 nav-link ${nav.isActive ? "is-active" : ""}`
                    }
                    to={item.href} key={index}

                  >
                    {item.icon}
                  </NavLink>
                </Tippy>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-lg-column d-none d-lg-block">
          <ul className="d-flex flex-wrap justify-content-center nav-list">
            <li className="nav-item btn-group dropup profile-user-dropdown dropdown">
              <a className="mb-2 nav-link">
                <Globe />
              </a>
            </li>
            <li className="nav-item" onClick={handleToggleMode}>
              <Tippy content="Dark/Light Mode" placement="right">
                <a className="mb-2 nav-link">
                  {mode ? <BrightnessHigh /> : <Moon />}
                </a>
              </Tippy>
            </li>
            <li className={`nav-item btn-group dropup profile-user-dropdown dropdown ${isMenuVisible ? 'show' : ''}`} onClick={handleToggleMenu} ref={dropdownRef}>
              <a className="nav-link mb-2" aria-haspopup="true" aria-expanded={isMenuVisible} tabIndex={0}>
                <img
                  className="profile-user rounded-circle"
                  src="https://ss-images.saostar.vn/wp700/2019/08/11/5823290/0.jpg"
                ></img>
              </a>
              <div tabIndex={-1} role="menu" className={`dropdown-menu dropdown-tools ${isMenuVisible ? "show" : ""}`} aria-hidden={!isMenuVisible} style={isMenuVisible ? dropStyle : null}>
                <button tabIndex={0} role="menuitem" type="button" className="dropdown-item">
                  Profile
                  <CardHeading style={{ float: 'right' }} />
                </button>
                <button tabIndex={0} role="menuitem" type="button" className="dropdown-item">
                  Settings
                  <Gear style={{ float: 'right' }} />
                </button>
                <div className="dropdown-divider" tabIndex={-1}></div>
                <a tabIndex={0} role="menuitem" className="dropdown-item" href="/logout">
                  Sign out
                  <ArrowLeftCircle style={{ float: 'right' }} />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
