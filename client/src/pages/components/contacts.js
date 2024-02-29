import React from "react";
import "../css/pages-common.css";
import { Search } from "react-bootstrap-icons";

const Contact = () => {
    return (
        <div>
            <div className="p-4">
                <div className="user-chat-nav float-end"></div>
                <h4 className="mb-4">Contacts</h4>
                <div className="search-box chat-search-box">
                    <div className="bg-light rounded-lg input-group input-group-lg">
                        <button className="form-control bg-light  form-control" type="button">
                            <Search className="search-icon font-size-18" />
                        </button>
                        <input className="form-control bg-light  form-control" placeholder="Search users..." type="text"></input>
                    </div>
                </div>
            </div>
            <div data-simplebar="init" id="chat-roon" className="p-4 chat-message-list chat-group-list simplebar-scrollable-y" >

            </div>
        </div>
    );
};

export default Contact;