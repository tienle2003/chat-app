import React, { useState, useRef, useEffect } from "react";
import "./user-chat.css";

const UserChats = () => {
    // Style for main realtime chat message
    const mainChatStyle = {
        maxHeight: "100%"
    };

    const visibleStyle = {
        visibility: "visible"
    };

    const hiddenStyle = {
        visibility: "hidden"
    };

    const simplebarwrapperMargin = {
        margin: "-24px"
    };

    const simplebarOffset = {
        right: "0px",
        bottom: "0px"
    };

    const simpleContentWrapper = {
        height: "10%",
        overflow: "hidden scroll"
    };

    const paddingStyle = {
        padding: "24px"
    };

    const simplebarScrollbar = {
        width: "0px",
        display: "none"
    };

    const simplebarScrollVisible = {
        height: "",
        transform: "translate3d(0px, 0px, 0px)",
        display: "block"
    };

    const simplebarContentWrapper = {
        height: "100%",
        overflow: "hidden"
    };


    // Style for dropdown menu
    const dropdownStyle = {
        position: 'absolute',
        inset: '0px auto auto 0px',
        transform: `translate(0px, 40px)`,
    };

    const [isFirstDropdownExpanded, setFirstDropdownExpanded] = useState(false);
    const [isSecondDropdownExpanded, setSecondDropdownExpanded] = useState(false);
    const dropdownRef1 = useRef(null);
    const dropdownRef2 = useRef(null);

    const handleFirstDropdownClick = () => {
        setFirstDropdownExpanded(!isFirstDropdownExpanded);
        setSecondDropdownExpanded(false);
    };

    const handleSecondDropdownClick = () => {
        setSecondDropdownExpanded(!isSecondDropdownExpanded);
        setFirstDropdownExpanded(false);
    };

    const handleDocumentClick = (event) => {
        if ((dropdownRef1.current && !dropdownRef1.current.contains(event.target))
            && (dropdownRef2.current && !dropdownRef2.current.contains(event.target))) {
            setFirstDropdownExpanded(false);
            setSecondDropdownExpanded(false);
        }
    };

    const handleInputClick = (event) => {
        event.stopPropagation();
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const firstAriaHidden = isFirstDropdownExpanded ? 'false' : 'true';
    const secondAriaHidden = isSecondDropdownExpanded ? 'false' : 'true';


    const [isShowProfile, setShowProfile] = useState(false);
    // Event show profile processing
    const handleShowProfile = () => {
        setShowProfile(!isShowProfile);
    };

    const handleCloseShowProfile = () => {
        setShowProfile(false);
    }


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
                                        <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-1/386494695_1040220287160554_1657037466046002038_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_ohc=N8HV_uxU4EEAX_mMmy0&_nc_ht=scontent.fhan14-4.fna&oh=00_AfDg3RpJlc-5K57MZeTH93oHGxcpi7kviZTKeAvzxY6Dfg&oe=65E402EA" alt="chatvia" className="rounded-circle avatar-xs"></img>
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
                                    <li className="list-inline-item" onClick={handleFirstDropdownClick}>
                                        <div className={`dropdown ${isFirstDropdownExpanded ? 'show' : ''}`} ref={dropdownRef1}>
                                            <button type="button" className="btn nav-btn btn btn-none" aria-haspopup="true" aria-expanded={isFirstDropdownExpanded} onClick={handleFirstDropdownClick}>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </button>
                                            <div tabIndex={-1} role="menu" className={`p-0 dropdown-menu-end dropdown-menu-md dropdown-menu ${isFirstDropdownExpanded ? 'show' : ''}`} aria-hidden={firstAriaHidden} style={isFirstDropdownExpanded ? dropdownStyle : null} onClick={handleInputClick}>
                                                <div className="search-box p-2">
                                                    <input placeholder="Search..." type="text" className="form-control bg-light border-0 form-control" onClick={handleInputClick}></input>
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
                                    <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0" onClick={handleShowProfile}>
                                        <button type="button" className="btn nav-btn">
                                            <i class="fa-regular fa-user"></i>
                                        </button>
                                    </li>
                                    <li className="list-inline-item" onClick={handleSecondDropdownClick}>
                                        <div className={`dropdown ${isSecondDropdownExpanded ? 'show' : ''}`} ref={dropdownRef2}>
                                            <button type="button" className="btn nav-btn btn btn-none" aria-haspopup="true" aria-expanded={isSecondDropdownExpanded} onClick={handleSecondDropdownClick}>
                                                <i class="fa-solid fa-ellipsis"></i>
                                            </button>
                                            <div tabIndex={-1} role="menu" className={`dropdown-menu-end dropdown-menu ${isSecondDropdownExpanded ? 'show' : ''}`} aria-hidden={secondAriaHidden} style={isSecondDropdownExpanded ? dropdownStyle : null}>
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
                    <div data-simplebar="init" className="chat-conversation p-5 p-lg-4 simplebar-scrollable-y" id="messages" style={mainChatStyle}>
                        <div className="simplebar-wrapper" style={simplebarwrapperMargin}>
                            <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer"></div>
                            </div>
                            <div className="simplebar-mask">
                                <div className="simplebar-offset" style={simplebarOffset}>
                                    <div className="simplebar-content-wrapper" tabIndex={0} role="region" aria-label="scrollable content" style={simpleContentWrapper}>
                                        <div className="simplebar-content" style={paddingStyle}>
                                            <ul className="list-unstyled mb-0">

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="simplebar-placeholder" ></div>
                        </div>
                        <div className="simplebar-track simple-horizontal" style={visibleStyle}>
                            <div className="simplebar-scrollbar" style={simplebarScrollbar}></div>
                        </div>
                        <div className="simplebar-track simple-vertical" style={hiddenStyle}>
                            <div className="simplebar-scrollbar simplebar-visible" style={simplebarScrollVisible}></div>
                        </div>
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

                {/* Show profile on the right side */}
                <div className="user-profile-sidebar" style={{ display: isShowProfile ? 'block' : 'none' }}>
                    <div className="px-3 px-lg-4 pt-3 pt-lg-4">
                        <div className="user-chat-nav text-end">
                            <button type="button" id="user-profile-hide" className="nav-btn btn btn-none" onClick={handleCloseShowProfile}>
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                    <div className="text-center p-4 border-bottom">
                        <div className="mb-4 d-flex justify-content-center">
                            <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-1/386494695_1040220287160554_1657037466046002038_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_ohc=N8HV_uxU4EEAX_mMmy0&_nc_ht=scontent.fhan14-4.fna&oh=00_AfDg3RpJlc-5K57MZeTH93oHGxcpi7kviZTKeAvzxY6Dfg&oe=65E402EA" alt="chatvia" className="rounded-circle avatar-lg img-thumbnail"></img>
                        </div>
                        <h5 className="font-size-16 mb-1 text-truncate">Lê Đức Anh</h5>
                        <p className="text-muted text-truncate mb-1">
                            <i class="font-size-10 text-success me-1 fa-solid fa-circle-dot"></i>
                            Active
                        </p>
                    </div>
                    <div className="p-4 user-profile-desc simplebar-scrollable-y" data-simplebar="init" style={mainChatStyle}>
                        <div className="simplebar-wrapper" style={simplebarwrapperMargin}>
                            <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer"></div>
                            </div>
                            <div className="simplebar-mask">
                                <div className="simplebar-offset" style={simplebarOffset}>
                                    <div className="simplebar-content-wrapper" tabIndex={0} aria-label="scrollable content" style={simplebarContentWrapper}>
                                        <div className="simplebar-content" style={paddingStyle}>
                                            <div className="text-muted">
                                                <p className="mb-4">
                                                    If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.
                                                </p>
                                            </div>
                                            <div id="profile-user-accordion" className="custom-accordion">
                                                <div className="shadow-none border mb-2 card">
                                                    <a className="text-dark text-decoration-none" href="#">
                                                        <div id="profile-user-headingOne" className="card-header">
                                                            <h5 className="font-size-14 m-0">
                                                                <i class="align-middle d-inline-block me-2 fa-regular fa-user"></i>
                                                                About
                                                                <span className="span-float-right float-end font-size-16">
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
                                                    <a className="text-dark text-decoration-none" href="#">
                                                        <div id="profile-user-headingOne" className="card-header">
                                                            <h5 className="font-size-14 m-0">
                                                                <i class="align-middle me-2 d-inline-block fa-solid fa-paperclip"></i>
                                                                Attached Files
                                                                <span className="span-float-right float-end font-size-16">
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
                        <div className="simplebar-track simplebar-horizontal" style={hiddenStyle}>
                            <div className="simplebar-scrollbar" ></div>
                        </div>
                        <div className="simplebar-track simplebar-vertical" style={visibleStyle}>
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