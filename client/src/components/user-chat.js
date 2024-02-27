import React, { useState } from "react";
import "./user-chat.css";

const UserChats = () => {
    // Style for main realtime chat message
    const mainChatStyle = {
        maxHeight: "100%"
    };

    // Style for dropdown menu
    const dropdownStyle = {
        position: "absolute",
        inset: "0px auto auto 0px",
        transform: "translate(0px, 40px)"
    };

    return (
        <div className="user-chat w-100 overflow-hidden user-chat-show">
            <div className="d-lg-flex">
                <div className="w-100 overflow-hidden position-relative">
                    {/* Top header to show avatar, username, active status and interacts: video, call, view profile, interact details */}
                    <div className="p-3 p-lg-4 border-bottom user-chat-topbar">
                        <div className="align-items-center row">
                            <div className="col-8 col-sm-4">
                                <div className="d-flex align-items-center">
                                    <div className="d-block d-lg-none me-2 ms-0">
                                        <a className="user-chat-remove text-muted font-size-16 p-2" href="#">
                                            <i class="fa-solid fa-caret-left"></i>
                                        </a>
                                    </div>
                                    <div className="me-3 ms-0">
                                        <img src="" alt="chatvia" className="rounded-circle avatar-xs"></img>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="font-size-16 mb-0 text-truncate">
                                            <a className="text-reset user-profile-show" href="#">Le Duc Anh</a>
                                            <i class="ic-active-status fa-solid fa-circle-dot"></i>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-sm-8">
                                <ul className="list-inline user-chat-nav text-end mb-0">
                                    <li className="list-inline-item">
                                        <div className="dropdown show">
                                            <button type="button" className="btn nav-btn btn btn-none">
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </button>
                                            <div role="menu" className="p-0 dropdown-menu-end dropdown-menu-md dropdown-menu show" style={dropdownStyle}>
                                                <div className="search-box p-2">
                                                    <input placeholder="Search..." type="text" className="form-control bg-light border-0 form-control"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                                        <button type="button" className="btn nav-btn">
                                            <i class="fa-solid fa-phone"></i>
                                        </button>
                                    </li>
                                    <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                                        <button type="button" className="btn nav-btn">
                                            <i class="fa-solid fa-video"></i>
                                        </button>
                                    </li>
                                    <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                                        <button type="button" className="btn nav-btn">
                                            <i class="fa-regular fa-user"></i>
                                        </button>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="dropdown show">
                                            <button type="button" className="btn nav-btn btn btn-none">
                                                <i class="fa-solid fa-ellipsis"></i>
                                            </button>
                                            <div role="menu" className="dropdown-menu-end dropdown-menu show" style={dropdownStyle}>
                                                <button type="button" role="menuitem" className="d-block d-lg-none user-profile-show dropdown-item">
                                                    View profile
                                                    <i class=" ic-dropdown-item float-end fa-regular fa-user"></i>
                                                </button>
                                                <button type="button" role="menuitem" className="dropdown-item">
                                                    Archive
                                                    <i class=" ic-dropdown-item float-end fa-solid fa-box-archive"></i>
                                                </button>
                                                <button type="button" role="menuitem" className="dropdown-item">
                                                    Muted
                                                    <i class=" ic-dropdown-item float-end fa-solid fa-volume-xmark"></i>
                                                </button>
                                                <button type="button" role="menuitem" className="dropdown-item">
                                                    Delete
                                                    <i class=" ic-dropdown-item float-end fa-solid fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Area to show realtime chat message between users with time and status for every message */}
                    <div className="chat-conversation p-5 p-lg-4 simplebar-scrollable-y" id="messages" style={mainChatStyle}>

                    </div>

                    {/* Area to enter chat massage and inract with emojis, images, attached files and send messages */}
                    <div className="chat-input-section p-3 p-lg-4 border-top mb-0">
                        <form className="">
                            <div className="g-0 row">
                                <div className="col">
                                    <div>
                                        <input type="text" className="form-control form-control-lg bg-light border-light form-control" placeholder="Enter Massage..." value=""></input>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="chat-input-links ms-md-2">
                                        <ul className="list-inline mb-0 ms-0">
                                            <li className="list-inline-item">
                                                <div className="emoji-dropdown btn-group dropup">
                                                    <button type="button" id="emoji" className="text-decoration-none font-size-16 btn-lg waves-effect btn btn-link">
                                                        <i class="ic-chat-tool fa-regular fa-face-smile"></i>
                                                    </button>
                                                </div>
                                                {/* Tables for choosing emojis */}
                                                <div>

                                                </div>
                                            </li>
                                            <li className="list-inline-item input-file">
                                                <label id="files" className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect form-label">
                                                    <i class="ic-chat-tool fa-solid fa-paperclip"></i>
                                                    <input name="fileInput" size="60" type="file" className="form-control"></input>
                                                </label>
                                            </li>
                                            <li className="list-inline-item input-file">
                                                <label id="images" className="me-1 btn btn-link text-decoration-none font-size-16 btn-lg waves-effect form-label">
                                                    <i class="ic-chat-tool fa-regular fa-image"></i>
                                                    <input accept="image/*" name="fileInput" type="file" className="form-control" size="60"></input>
                                                </label>
                                            </li>
                                            <li className="list-inline-item">
                                                <button type="submit" className="font-size-16 btn-lg chat-send waves-effect waves-light btn btn-primary">
                                                    <i class="ic-chat-tool ic-send fa-solid fa-paper-plane"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="user-profile-sidebar" >
                    <div className="px-3 px-lg-4 pt-3 pt-lg-4">
                        <div className="user-chat-nav text-end">
                            <button type="button" id="user-profile-hide" className="nav-btn btn btn-none">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                    <div className="text-center p-4 border-bottom">
                        <div className="mb-4 d-flex justify-content-center">
                            <img src="" alt="chatvia" className="rounded-circleavatar-lg img-thumbnail"></img>
                        </div>
                        <h5 className="font-size-16 mb-1 text-truncate">Lê Đức Anh</h5>
                        <p className="text-muted text-truncate mb-1">
                            <i class="fa-solid fa-circle-dot"></i>
                            Active
                        </p>
                    </div>
                    <div className="p-4 user-profile-desc simplebar-scrollable-y" >
                        <div className="simplebar-wrapper" >
                            <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer"></div>
                            </div>
                            <div className="simplebar-mask">
                                <div className="simplebar-offset" >
                                    <div className="simplebar-content-wrapper" >
                                        <div className="simplebar-content" >
                                            <div className="text-muted">
                                                <p className="mb-4">
                                                    If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.
                                                </p>
                                            </div>
                                            <div className="profile-user-accordion">
                                                <div className="shadow-none border mb-2 card">
                                                    <a className="text-dark" href="#">
                                                        <div id="profile-user-headingOne" className="card-header">
                                                            <h5 className="font-size-14 m-0">
                                                                <i class="fa-regular fa-user"></i> About
                                                                <span className="span-float-right">
                                                                    <i class="fa-solid fa-caret-up"></i>
                                                                    {/* <i class="fa-solid fa-caret-down"></i> */}
                                                                </span>
                                                            </h5>
                                                        </div>
                                                    </a>
                                                    <div className="collapse show">
                                                        <div className="card-body">
                                                            <div>
                                                                <p className="text-muted mb-1">Name</p>
                                                                <h5 className="font-size-14">Le Duc Anh</h5>
                                                            </div>
                                                            <div className="mt-4">
                                                                <p className="text-muted mb-1">Email</p>
                                                                <h5 className="font-size-14"></h5>
                                                            </div>
                                                            <div className="mt-4">
                                                                <p className="text-muted mb-1">Time</p>
                                                                <h5 className="font-size-14">11:40 PM</h5>
                                                            </div>
                                                            <div className="mt-4">
                                                                <p className="text-muted mb-1">Location</p>
                                                                <h5 className="font-size-14 mb-0" >Da Nang, Viet Nam</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-1 shadow-none border card">
                                                    <a className="text-dark" href="#">
                                                        <div id="profile-user-headingOne" className="card-header">
                                                            <h5 className="font-size-14 m-0">
                                                                <i class="fa-solid fa-paperclip"></i>
                                                                Attached Files
                                                                <span className="span-float-right">
                                                                    <i class="fa-solid fa-caret-up"></i>
                                                                    {/* <i class="fa-solid fa-caret-down"></i> */}
                                                                </span>
                                                            </h5>
                                                        </div>
                                                    </a>
                                                    <div className="collapse">
                                                        <div className="card-body">
                                                            <div className="p-2 mb-2 border card">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar-sm me-3 ms-0">

                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">

                                                                    </div>
                                                                    <div className="ms-4">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="p-2 mb-2 border card">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar-sm me-3 ms-0">

                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">

                                                                    </div>
                                                                    <div className="ms-4">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="p-2 mb-2 border card">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar-sm me-3 ms-0">

                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">

                                                                    </div>
                                                                    <div className="ms-4">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="p-2 mb-2 border card">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar-sm me-3 ms-0">

                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">

                                                                    </div>
                                                                    <div className="ms-4">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="simplebar-placeholder" ></div>
                        </div>
                        <div className="simplebar-track simplebar-horizontal" >
                            <div className="simplebar-scrollbar" ></div>
                        </div>
                        <div className="simplebar-track simplebar-vertical" >
                            <div className="simplebar-scrollbar" >

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserChats;