import React from "react";
import "../css/pages-common.css";
import { People, Search } from "react-bootstrap-icons";

const Groups = () => {
    return (
        <div>
            <div className="p-4">
                <div className="user-chat-nav float-end">
                    <div className="create-group">
                        <button type="button" className="text-decoration-none text-muted font-size-18 py-0 btn btn-non-active btn-link">
                            <People className="me-1" />
                        </button>
                    </div>
                </div>
                <h4 className="mb-4">Groups</h4>
                <div className="search-box chat-search-box">
                    <div className="bg-light rounded-lg input-group input-group-lg">
                        <button type="button" className="text-decoration-none text-muted pr-1 btn btn-non-active btn-link bg-light">
                            <Search className="search-icon font-size-18" style={{ transform: 'translate(14%, 20%)' }} />
                        </button>
                        <input placeholder="Search groups..." type="text" className="form-control bg-light form-control"></input>
                    </div>
                </div>
            </div>
            <div data-simplebar="init" className="p-4 chat-message-list chat-group-list" style={{ maxHeight: '100%' }}>
                <div className="simplebar-wrapper" style={{ margin: '-24px' }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer"></div>
                    </div>
                    <div className="simplebar-mask">
                        <div className="simplebar-offset" >
                            <div className="simplebar-content-wrapper" tabIndex={0} role="region" aria-label="scrollable content" style={{ height: '100%', overflow: "hidden" }}>
                                <div className="simplebar-content" style={{ padding: '24px' }}>
                                    <ul className="list-unstyled chat-list" id="chat-list">
                                        <li>
                                            <a href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="chat-user-img me-3 ms-0">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-primary-subtitle text-primary">G</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-14 mb-0">#General</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="chat-user-img me-3 ms-0">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-primary-subtitle text-primary">G</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-14 mb-0">#General</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="chat-user-img me-3 ms-0">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-primary-subtitle text-primary">G</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-14 mb-0">#General</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="chat-user-img me-3 ms-0">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-primary-subtitle text-primary">G</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-14 mb-0">#General</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="chat-user-img me-3 ms-0">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-primary-subtitle text-primary">G</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-14 mb-0">#General</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="chat-user-img me-3 ms-0">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-primary-subtitle text-primary">G</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-14 mb-0">#General</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="simplebar-placeholder" ></div>
                </div>
                <div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}>
                    <div className="simplebar-scrollbar" style={{ width: '0px', display: "none" }}></div>
                </div>
                <div className="simplebar-track simplebar-vertical" style={{ visibility: "hidden" }}>
                    <div className="simplebar-scrollbar" style={{ height: '0px', display: "none" }}></div>
                </div>
            </div>
        </div>
    );
};
export default Groups;