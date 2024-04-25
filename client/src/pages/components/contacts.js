import React from "react";
import "../css/pages-common.css";
import { PersonAdd, Search } from "react-bootstrap-icons";

const Contact = () => {
    return (
        <div>
            <div className="p-4">
                <div className="user-chat-nav float-end">
                    <div id="add-contact">
                        <button type="button" className="text-decoration-none text-muted font-size-18 py-0 btn btn-non-active btn-link">
                            <PersonAdd style={{ fontSize: '1.5rem' }} />
                        </button>
                    </div>
                </div>
                <h4 className="mb-4">Contacts</h4>
                <div className="search-box chat-search-box">
                    <div className="bg-light rounded-lg input-group input-group-lg">
                        <button className="text-decoration-none text-muted pr-1 btn btn-non-active btn-link bg-light" type="button">
                            <Search className="search-icon font-size-18" style={{ transform: 'translate(14%, 20%)' }} />
                        </button>
                        <input className="form-control bg-light  form-control" placeholder="Search users..." type="text"></input>
                    </div>
                </div>
            </div>
            <div data-simplebar="init" id="chat-roon" className="p-4 chat-message-list chat-group-list simplebar-scrollable-y" style={{ maxHeight: '100%' }}>
                <div className="simplebar-wrapper" style={{ margin: '-24px' }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer"></div>
                    </div>
                    <div className="simplebar-mask">
                        <div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}>
                            <div className="simplebar-content-wrapper" tabIndex={0} role="region" aria-label="scroll content" style={{ height: '100%', overflow: 'hidden scroll' }}>
                                <div className="simplebar-content" style={{ padding: '24px' }}>
                                    <div>
                                        <div className="p-3 fw-bold text-primary">A</div>
                                        <ul className="list-unstyled contact-list">

                                        </ul>
                                    </div>
                                    <div className="mt-3">
                                        <div className="p-3 fw-bold text-primary">C</div>
                                        <ul className="list-unstyled contact-list">

                                        </ul>
                                    </div>
                                    <div className="mt-3">
                                        <div className="p-3 fw-bold text-primary">D</div>
                                        <ul className="list-unstyled contact-list">

                                        </ul>
                                    </div>
                                    <div className="mt-3">
                                        <div className="p-3 fw-bold text-primary">I</div>
                                        <ul className="list-unstyled contact-list">

                                        </ul>
                                    </div>
                                    <div className="mt-3">
                                        <div className="p-3 fw-bold text-primary">M</div>
                                        <ul className="list-unstyled contact-list">

                                        </ul>
                                    </div>
                                    <div className="mt-3">
                                        <div className="p-3 fw-bold text-primary">N</div>
                                        <ul className="list-unstyled contact-list">

                                        </ul>
                                    </div>
                                    <div className="mt-3">
                                        <div className="p-3 fw-bold text-primary">O</div>
                                        <ul className="list-unstyled contact-list">

                                        </ul>
                                    </div>
                                    <div className="mt-3">
                                        <div className="p-3 fw-bold text-primary">P</div>
                                        <ul className="list-unstyled contact-list">

                                        </ul>
                                    </div>
                                    <div className="mt-3">
                                        <div className="p-3 fw-bold text-primary">S</div>
                                        <ul className="list-unstyled contact-list">

                                        </ul>
                                    </div>
                                    <div className="mt-3">
                                        <div className="p-3 fw-bold text-primary">T</div>
                                        <ul className="list-unstyled contact-list">

                                        </ul>
                                    </div>
                                    <div className="mt-3">
                                        <div className="p-3 fw-bold text-primary">H</div>
                                        <ul className="list-unstyled contact-list">

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="simplebar-placeholder" style={{ width: 'auto', height: 'auto' }}></div>
                </div>
                <div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}>
                    <div className="simplebar-scrollbar" style={{ width: '0px', display: "none" }}></div>
                </div>
                <div className="simplebar-track simplebar-vertical" style={{ visibility: 'visible' }}>
                    <div className="simplebar-scrollbar" style={{ display: 'block', height: 'auto', transform: 'translate3d(auto, auto, auto)' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;