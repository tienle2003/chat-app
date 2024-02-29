import React, { useEffect, useRef, useState } from "react";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import "../css/pages-common.css";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

const Profile = () => {
    const [isProfileExpanded, setProfileExpanded] = useState(false);
    const dropdownRef = useRef(null);

    const handleProfleDropdown = () => {
        setProfileExpanded(!isProfileExpanded);
    };

    const ariaHidden = isProfileExpanded ? 'false' : 'true';

    const handleDocumentClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setProfileExpanded(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const handleButtonClicked = () => {
        setProfileExpanded(false);
    };

    const [show1, setExpanedShow1] = useState(false);
    const [show2, setExpanedShow2] = useState(false);
    const handleToggleShow1 = () => {
        setExpanedShow1(!show1);
        setExpanedShow2(false);
    };

    const handleToggleShow2 = () => {
        setExpanedShow2(!show2);
        setExpanedShow1(false);
    };

    return (
        <div>
            <div className="px-4 pt-4">
                <div className="user-chat-nav float-end">
                    <div className={`dropdown ${isProfileExpanded ? 'show' : ''}`} ref={dropdownRef}>
                        <a aria-haspopup="true" className="font-size-18 text-muted dropdown-toogle" aria-expanded={isProfileExpanded} onClick={handleProfleDropdown}>
                            <ThreeDotsVertical />
                        </a>
                        <div tabIndex={-1} role="menu" aria-hidden={ariaHidden} className={`dropdown-menu-end dropdown-menu ${isProfileExpanded ? 'show' : ''}`}>
                            <button type="button" tabIndex={0} role="menuitem" className="dropdown-item" onClick={handleButtonClicked}>
                                Edit
                            </button>
                            <button type="button" tabIndex={0} role="menuitem" className="dropdown-item" onClick={handleButtonClicked}>
                                Action
                            </button>
                            <div tabIndex={-1} className="dropdown-divider"></div>
                            <button type="button" tabIndex={0} role="menuitem" className="dropdown-item" onClick={handleButtonClicked}>
                                Another action
                            </button>
                        </div>
                    </div>
                </div>
                <h4 className="mb-0">My Profile</h4>
            </div>
            <div className="text-center p-4 border-bottom">
                <div className="mb-4">
                    <img src="https://ss-images.saostar.vn/wp700/2019/08/11/5823290/0.jpg" className="rounded-circle avatar-lg img-thumbnail" alt="chatvia"></img>
                </div>
                <h5 className="font-size-16 mb-1 text-truncate">Ngô Thanh Hoài</h5>
                <p className="text-muted text-truncate mb-1">
                    <i class="font-size-10 text-success me-1 d-inline-block fa-solid fa-circle-dot"></i>
                    Active
                </p>
            </div>
            <div className="p-4 user-profile-desc">
                <div className="text-muted">
                    <p className="mb-4">
                        If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.
                    </p>
                </div>
                <div className="custom-accordion" id="profile-user-accordion-1">
                    <div className="shadow-none border mb-2 card">
                        <a className="text-dark text-decoration-none" href="#" onClick={handleToggleShow1}>
                            <div id="profile-user-headingOne" className="card-header">
                                <h5 className="font-size-14 m-0">
                                    <i class="align-middle d-inline-block me-2 fa-regular fa-user"></i>
                                    About
                                    <span className="span-float-right float-end font-size-16">
                                        {show1 ? <ChevronUp /> : <ChevronDown />}
                                    </span>
                                </h5>
                            </div>
                        </a>
                        <div className={`collapse ${show1 ? 'show' : ''}`}>
                            <div className="card-body">
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
                                    <h5 className="font-size-14 mb-0" >Da Nang, Viet Nam</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-1 shadow-none border card">
                        <a className="text-dark text-decoration-none" href="#" onClick={handleToggleShow2}>
                            <div id="profile-user-headingOne" className="card-header">
                                <h5 className="font-size-14 m-0">
                                    <i class="align-middle me-2 d-inline-block fa-solid fa-paperclip"></i>
                                    Attached Files
                                    <span className="span-float-right float-end font-size-16">
                                        {show2 ? <ChevronUp /> : <ChevronDown />}
                                    </span>
                                </h5>
                            </div>
                        </a>
                        <div className={`collapse ${show2 ? 'show' : ''}`}>
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
    );
};
export default Profile;