import React from "react";
import "../css/pages-common.css";
import { ChevronDown, ChevronUp, PencilFill, PenFill } from 'react-bootstrap-icons';

const ChatGPT = () => {
    return (
        <div>
            <div className="px-4 pt-4">
                <h4 className="mb-0">Settings</h4>
            </div>
            <div className="text-center border-bottom p-4">
                <div className="mb-4 profile-user">
                    <img src="https://ss-images.saostar.vn/wp700/2019/08/11/5823290/0.jpg" alt="chatvia" className="rounded-circle avatar-lg img-thumbnail"></img>
                    <button type="button" className="avatar-xs p-0 rounded-circle profile-photo-edit btn btn-light">
                        <PencilFill />
                    </button>
                </div>
                <h5 className="font-size-16 mb-1 text-truncate">Ngô Thanh Hoài</h5>
                <div className="d-inline-block mb-1 dropdown">
                    <a aria-haspopup="true" className="text-muted pb-1 d-block" aria-expanded >
                        Available
                        <ChevronDown />
                    </a>
                    <div tabIndex={-1} role="menu" className="dropdown-menu" aria-hidden >
                        <button tabIndex={0} role="menuitem" className="dropdown-item">Available</button>
                        <button tabIndex={0} role="menuitem" className="dropdown-item">Busy</button>
                    </div>
                </div>
            </div>
            <div data-simplebar="init" className="p-4 user-profile-desc simplebar-scrollable-y" >
                <div className="simplebar-wrapper" >
                    <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer"></div>
                    </div>
                    <div className="simplebar-mask">
                        <div className="simplebar-offset" >
                            <div className="simplebar-content-wrapper" tabIndex={0} role="region" aria-label="scrollable content" >
                                <div className="simplebar-content" >
                                    <div className="custom-accordion" id="profile-setting-accordion">
                                        <div className="accordion-item border mb-2 card">
                                            <a className="text-dark" href="#">
                                                <div id="profile-user-headingOne" className="card-header">
                                                    <h5 className="font-size-14 m-0">
                                                        Personal Info
                                                        <ChevronDown />
                                                    </h5>
                                                </div>
                                            </a>
                                            <div className="collapse">
                                                <div className="card-body">
                                                    <div className="float-end">
                                                        <button type="button" className="btn btn-light btn-sm">
                                                            <PenFill />
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
                                            <a className="text-dark" href="#">
                                                <div id="profile-user-headingOne" className="card-header">
                                                    <h5 className="font-size-14 m-0">
                                                        Privacy
                                                        <ChevronDown />
                                                    </h5>
                                                </div>
                                            </a>
                                            <div className="collapse">
                                                <div className="card-body">
                                                    <div className="py-3 ">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="font-size-13 mb-0 text-truncate">Profile photo</h5>
                                                            </div>
                                                            <div className="ms-2 dropdown">
                                                                <button aria-haspopup="true" className="btn btn-light btn-sm w-sm" aria-expanded >
                                                                    Everyone
                                                                    <ChevronDown />
                                                                </button>
                                                                <div tabIndex={-1} role="menu" className="dropdown-menu-end dropdown-menu" aria-hidden >
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
                                                            <div className="ms-2 dropdown">
                                                                <button aria-haspopup="true" className="btn btn-light btn-sm w-sm" aria-expanded >
                                                                    Everyone
                                                                    <ChevronDown />
                                                                </button>
                                                                <div tabIndex={-1} role="menu" className="dropdown-menu-end dropdown-menu" aria-hidden >
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
                                                                    <input id="privacy-lastseenSwitch" type="checkbox" className="form-check-input form-check-input" checked></input>
                                                                    <label for="privacy-lastseenSwitch" className="form-check-label form-label"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="py-3 border-top">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="font-size-13 mb-0 text-truncate">Groups</h5>
                                                            </div>
                                                            <div className="ms-2 dropdown">
                                                                <button aria-haspopup="true" className="btn btn-light btn-sm w-sm" aria-expanded >
                                                                    Everyone
                                                                    <ChevronDown />
                                                                </button>
                                                                <div tabIndex={-1} role="menu" className="dropdown-menu-end dropdown-menu" aria-hidden >
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
                                            <a className="text-dark" href="#">
                                                <div id="profile-user-headingOne" className="card-header">
                                                    <h5 className="font-size-14 m-0">
                                                        Security
                                                        <ChevronDown />
                                                    </h5>
                                                </div>
                                            </a>
                                            <div className="collapse">
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
                                            <a className="text-dark" href="#">
                                                <div id="profile-user-headingOne" className="card-header">
                                                    <h5 className="font-size-14 m-0">
                                                        Help
                                                        <ChevronDown />
                                                    </h5>
                                                </div>
                                            </a>
                                            <div className="collapse">
                                                <div className="card-body">
                                                    <div>
                                                        <div className="py-3 ">
                                                            <h5 className="font-size-13 mb-0">
                                                                <a className="text-body d-block" href="#">FAQs</a>
                                                            </h5>
                                                        </div>
                                                        <div className="py-3 border-top">
                                                            <h5 className="font-size-13 mb-0">
                                                                <a className="text-body d-block" href="#">Contact</a>
                                                            </h5>
                                                        </div>
                                                        <div className="py-3 border-top">
                                                            <h5 className="font-size-13 mb-0">
                                                                <a className="text-body d-block" href="#">Terms & Privacy policy</a>
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
                    <div className="simplebar-placeholder" ></div>
                </div>
                <div className="simplebar-track simplebar-horizontal" >
                    <div className="simplebar-scrollbar" ></div>
                </div>
                <div className="simplebar-track simplebar-vertical" >
                    <div className="simplebar-scrollbar" ></div>
                </div>
            </div>
        </div>
    );
};
export default ChatGPT;