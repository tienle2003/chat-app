import React, { useEffect, useRef, useState } from "react";
import "../css/pages-common.css";
import { ChevronDown, ChevronUp, PencilFill, PenFill } from 'react-bootstrap-icons';

const ChatGPT = () => {
    const [isExpanded, setExpanded] = useState(false);
    const dropdownRef = useRef(null);
    const handleExpandClicked = () => {
        setExpanded(!isExpanded);
    };
    const ariaHidden = isExpanded ? 'false' : 'true';

    const handleButtonClicked = () => {
        setExpanded(false);
    };


    const handleDocumentClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setExpanded(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        }
    }, []);


    const [show1, setExpanedShow1] = useState(false);
    const [show2, setExpanedShow2] = useState(false);
    const [show3, setExpanedShow3] = useState(false);
    const [show4, setExpanedShow4] = useState(false);
    const handleToggleShow1 = () => {
        setExpanedShow1(!show1);
        setExpanedShow2(false);
        setExpanedShow3(false);
        setExpanedShow4(false);
    }
    const handleToggleShow2 = () => {
        setExpanedShow2(!show2);
        setExpanedShow1(false);
        setExpanedShow3(false);
        setExpanedShow4(false);
    }
    const handleToggleShow3 = () => {
        setExpanedShow3(!show3);
        setExpanedShow1(false);
        setExpanedShow2(false);
        setExpanedShow4(false);
    }
    const handleToggleShow4 = () => {
        setExpanedShow4(!show4);
        setExpanedShow1(false);
        setExpanedShow2(false);
        setExpanedShow3(false);
    }


    const [profilePhoToExpanded, setProfilePhotoExpanded] = useState(false);
    const [statusExpanded, setStatusExpanded] = useState(false);
    const [groupsExpanded, setGroupsExpanded] = useState(false);

    const handleProfilePhotoToggle = () => {
        setProfilePhotoExpanded(!profilePhoToExpanded);
        setStatusExpanded(false);
        setGroupsExpanded(false);
    };
    const handleStatusToggle = () => {
        setStatusExpanded(!statusExpanded);
        setProfilePhotoExpanded(false);
        setGroupsExpanded(false);
    };
    const handleGroupsToggle = () => {
        setGroupsExpanded(!groupsExpanded);
        setProfilePhotoExpanded(false);
        setStatusExpanded(false);
    };

    const profilePhotoHidden = profilePhoToExpanded ? 'false' : 'true';
    const statusHidden = statusExpanded ? 'false' : 'true';
    const groupHidden = groupsExpanded ? 'false' : 'true';

    return (
        <div>
            <div className="px-4 pt-4">
                <h4 className="mb-0">Settings</h4>
            </div>
            <div className="text-center border-bottom p-4">
                <div className="mb-4 profile-user">
                    <img src="https://ss-images.saostar.vn/wp700/2019/08/11/5823290/0.jpg" alt="chatvia" className="rounded-circle avatar-lg img-thumbnail"></img>
                    <button type="button" className="avatar-xs p-0 rounded-circle profile-photo-edit btn btn-set-active btn-light" >
                        <PencilFill style={{ height: '0.8em' }} />
                    </button>
                </div>
                <h5 className="font-size-16 mb-1 text-truncate">Ngô Thanh Hoài</h5>
                <div className={`d-inline-block mb-1 dropdown ${isExpanded ? 'show' : ''}`} ref={dropdownRef}>
                    <a aria-haspopup="true" className="text-muted pb-1 d-block" aria-expanded={isExpanded} onClick={handleExpandClicked}>
                        Available
                        {isExpanded ? <ChevronUp style={{ transform: 'translate(42%, 20%)' }} /> : <ChevronDown style={{ transform: 'translate(42%, 20%)' }} />}
                    </a>
                    <div tabIndex={-1} role="menu" className={`dropdown-menu ${isExpanded ? 'show' : ''}`} aria-hidden={ariaHidden} >
                        <button tabIndex={0} role="menuitem" className="dropdown-item" onClick={handleButtonClicked}>Available</button>
                        <button tabIndex={0} role="menuitem" className="dropdown-item" onClick={handleButtonClicked}>Busy</button>
                    </div>
                </div>
            </div>
            <div data-simplebar="init" className="p-4 user-profile-desc simplebar-scrollable-y" style={{ maxHeight: '100%' }}>
                <div className="simplebar-wrapper" style={{ margin: '-24px' }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer"></div>
                    </div>
                    <div className="simplebar-mask">
                        <div className="simplebar-offset" >
                            <div className="simplebar-content-wrapper" tabIndex={0} role="region" aria-label="scrollable content" style={{ height: '100%', overflow: 'hidden scroll' }}>
                                <div className="simplebar-content" style={{ padding: '24px' }}>
                                    <div className="custom-accordion" id="profile-setting-accordion">
                                        <div className="accordion-item border mb-2 card">
                                            <a className="text-dark text-decoration-none" href="#" onClick={handleToggleShow1}>
                                                <div id="profile-user-headingOne" className="card-header">
                                                    <h5 className="font-size-14 m-0">
                                                        Personal Info
                                                        {show1 ? <ChevronUp className="float-end accor-plus-icon" /> : <ChevronDown className="float-end accor-plus-icon" />}
                                                    </h5>
                                                </div>
                                            </a>
                                            <div className={`collapse ${show1 ? 'show' : ''}`}>
                                                <div className="card-body">
                                                    <div className="float-end">
                                                        <button type="button" className="btn btn-light btn-set-active btn-sm">
                                                            <PenFill style={{ marginRight: '6px', transform: 'translate(-8%,14%)' }} />
                                                            Edit
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <p className="text-muted mb-1">Name</p>
                                                        <h5 className="font-size-14">Ngo Thanh Hoai</h5>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-muted mb-1">Email</p>
                                                        <h5 className="font-size-14">hoaiday@gmail.com</h5>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-muted mb-1">Time</p>
                                                        <h5 className="font-size-14">11:40 PM</h5>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-muted mb-1">Location</p>
                                                        <h5 className="font-size-14">Da Nang, Viet Nam</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item border mb-2 card">
                                            <a className="text-dark text-decoration-none" href="#" onClick={handleToggleShow2}>
                                                <div id="profile-user-headingOne" className="card-header">
                                                    <h5 className="font-size-14 m-0">
                                                        Privacy
                                                        {show2 ? <ChevronUp className="float-end accor-plus-icon" /> : <ChevronDown className="float-end accor-plus-icon" />}
                                                    </h5>
                                                </div>
                                            </a>
                                            <div className={`collapse ${show2 ? 'show' : ''}`}>
                                                <div className="card-body">
                                                    <div className="py-3 ">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="font-size-13 mb-0 text-truncate">Profile photo</h5>
                                                            </div>
                                                            <div className={`ms-2 dropdown ${profilePhoToExpanded ? 'show' : ''}`}>
                                                                <button aria-haspopup="true" className="btn btn-light btn-set-active btn-sm w-sm" aria-expanded={profilePhoToExpanded} onClick={handleProfilePhotoToggle}>
                                                                    Everyone
                                                                    <ChevronDown />
                                                                </button>
                                                                <div tabIndex={-1} role="menu" className={`dropdown-menu-end dropdown-menu ${profilePhoToExpanded ? 'show' : ''}`} aria-hidden={profilePhotoHidden} >
                                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">Everyone</button>
                                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">Selected</button>
                                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">Nobody</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="py-3 border-top">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="font-size-13 mb-0 text-truncate">Last seen</h5>
                                                            </div>
                                                            <div className="ms-2">
                                                                <div className="form-check form-switch">
                                                                    <input id="privacy-lastseenSwitch" type="checkbox" className="form-check-input form-check-input" checked></input>
                                                                    <label for="privacy-lastseenSwitch" className="form-check-label form-label"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="py-3 border-top">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="font-size-13 mb-0 text-truncate">Status</h5>
                                                            </div>
                                                            <div className={`ms-2 dropdown ${statusExpanded ? 'show' : ''}`}>
                                                                <button aria-haspopup="true" className="btn btn-light btn-set-active btn-sm w-sm" aria-expanded={statusExpanded} onClick={handleStatusToggle}>
                                                                    Everyone
                                                                    <ChevronDown />
                                                                </button>
                                                                <div tabIndex={-1} role="menu" className={`dropdown-menu-end dropdown-menu ${statusExpanded ? 'show' : ''}`} aria-hidden={statusHidden} >
                                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">Everyone</button>
                                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">Selected</button>
                                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">Nobody</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="py-3 border-top">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="font-size-13 mb-0 text-truncate">Read receipts</h5>
                                                            </div>
                                                            <div className="ms-2">
                                                                <div className="form-check form-switch">
                                                                    <input id="privacy-readreceiptSwitch" type="checkbox" className="form-check-input form-check-input" checked></input>
                                                                    <label for="privacy-readreceiptSwitch" className="form-check-label form-label"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="py-3 border-top">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="font-size-13 mb-0 text-truncate">Groups</h5>
                                                            </div>
                                                            <div className={`ms-2 dropdown ${groupsExpanded ? 'show' : ''}`}>
                                                                <button aria-haspopup="true" className="btn btn-light btn-set-active btn-sm w-sm" aria-expanded={groupsExpanded} onClick={handleGroupsToggle}>
                                                                    Everyone
                                                                    <ChevronDown />
                                                                </button>
                                                                <div tabIndex={-1} role="menu" className={`dropdown-menu-end dropdown-menu ${groupsExpanded ? 'show' : ''}`} aria-hidden={groupHidden} >
                                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">Everyone</button>
                                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">Selected</button>
                                                                    <button tabIndex={0} role="menuitem" className="dropdown-item">Nobody</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item border mb-2 card">
                                            <a className="text-dark text-decoration-none" href="#" onClick={handleToggleShow3} >
                                                <div id="profile-user-headingOne" className="card-header">
                                                    <h5 className="font-size-14 m-0">
                                                        Security
                                                        {show3 ? <ChevronUp className="float-end accor-plus-icon" /> : <ChevronDown className="float-end accor-plus-icon" />}
                                                    </h5>
                                                </div>
                                            </a>
                                            <div className={`collapse ${show3 ? 'show' : ''}`}>
                                                <div className="card-body">
                                                    <div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="font-size-13 mb-0 text-truncate">Show security notification</h5>
                                                            </div>
                                                            <div className="ms-2 me-0">
                                                                <div className="form-check form-switch">
                                                                    <input id="security-notificationswitch" type="checkbox" className="form-check-input form-check-input"></input>
                                                                    <label for="security-notificationswitch" className="form-check-label form-label"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item border mb-2 card">
                                            <a className="text-dark text-decoration-none" href="#" onClick={handleToggleShow4}>
                                                <div id="profile-user-headingOne" className="card-header">
                                                    <h5 className="font-size-14 m-0">
                                                        Help
                                                        {show4 ? <ChevronUp className="float-end accor-plus-icon" /> : <ChevronDown className="float-end accor-plus-icon" />}
                                                    </h5>
                                                </div>
                                            </a>
                                            <div className={`collapse ${show4 ? 'show' : ''}`}>
                                                <div className="card-body">
                                                    <div>
                                                        <div className="py-3 ">
                                                            <h5 className="font-size-13 mb-0">
                                                                <a className="text-body d-block text-decoration-none" href="#">FAQs</a>
                                                            </h5>
                                                        </div>
                                                        <div className="py-3 border-top">
                                                            <h5 className="font-size-13 mb-0">
                                                                <a className="text-body d-block text-decoration-none" href="#">Contact</a>
                                                            </h5>
                                                        </div>
                                                        <div className="py-3 border-top">
                                                            <h5 className="font-size-13 mb-0">
                                                                <a className="text-body d-block text-decoration-none" href="#">Terms & Privacy policy</a>
                                                            </h5>
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
                    <div className="simplebar-placeholder" style={{ width: 'auto', height: 'auto' }}></div>
                </div>
                <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
                    <div className="simplebar-scrollbar" style={{ width: '0px', display: "none" }}></div>
                </div>
                <div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}>
                    <div className="simplebar-scrollbar" style={{ height: '0px', display: "none", transform: 'translate3d(0px, 0px, 0px)' }}></div>
                </div>
            </div>
        </div>
    );
};
export default ChatGPT;