import React from "react";
import { Search } from "react-bootstrap-icons";
import "../css/pages-common.css";

const Chats = () => {
    return (
        <div id="pills-chat" className="tab-pane ">
            <div>
                <div className="px-4 pt-4">
                    <h4 className="mb-4">Chats</h4>
                    <div className="search-box chat-search-box">
                        <div className="mb-3 rounded-3 input-group">
                            <span className="input-group-text text-muted bg-light pe-1 ps-3" id="basic-addon1">
                                <Search className="search-icon font-size-18" />
                            </span>
                            <input placeholder="Search messages or users" type="text" className="form-control bg-light form-control"></input>
                        </div>
                    </div>
                </div>
                <div className="px-4 pb-4 dot-remove" dir="ltr">
                    <div className="alice-carousel">
                        <div>
                            <div className="alice-carousel__wrapper" >
                                <ul className="alice-carousel__stage" >
                                    <li className="alice-carousel_stage-item __active __target" style={{ width: '83px' }}>
                                        <div className="item">
                                            <a href="#" className="user-status-box">
                                                <div className="avatar-xs mx-auto d-block chat-user-img online">
                                                    <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/121715738_353421755994447_2417794065107370349_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=bXaRhYwUDLsAX8MqKTC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBpzbFsFUvCZEOcMXFLTgiGSUfqDh0oJblYDgoebsjGOg&oe=66064582" alt="user-img" className="img-fluid rounded-circle"></img>
                                                    <span className="user-status"></span>
                                                </div>
                                                <h5 className="font-size-13 text-truncate mt-3 mb-1">Patrick</h5>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="alice-carousel_stage-item __active __target" style={{ width: '83px' }}>
                                        <div className="item">
                                            <a href="#" className="user-status-box">
                                                <div className="avatar-xs mx-auto d-block chat-user-img online">
                                                    <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/121715738_353421755994447_2417794065107370349_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=bXaRhYwUDLsAX8MqKTC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBpzbFsFUvCZEOcMXFLTgiGSUfqDh0oJblYDgoebsjGOg&oe=66064582" alt="user-img" className="img-fluid rounded-circle"></img>
                                                    <span className="user-status"></span>
                                                </div>
                                                <h5 className="font-size-13 text-truncate mt-3 mb-1">Patrick</h5>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="alice-carousel_stage-item __active __target" style={{ width: '83px' }}>
                                        <div className="item">
                                            <a href="#" className="user-status-box">
                                                <div className="avatar-xs mx-auto d-block chat-user-img online">
                                                    <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/121715738_353421755994447_2417794065107370349_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=bXaRhYwUDLsAX8MqKTC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBpzbFsFUvCZEOcMXFLTgiGSUfqDh0oJblYDgoebsjGOg&oe=66064582" alt="user-img" className="img-fluid rounded-circle"></img>
                                                    <span className="user-status"></span>
                                                </div>
                                                <h5 className="font-size-13 text-truncate mt-3 mb-1">Patrick</h5>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="alice-carousel_stage-item __active __target" style={{ width: '83px' }}>
                                        <div className="item">
                                            <a href="#" className="user-status-box">
                                                <div className="avatar-xs mx-auto d-block chat-user-img online">
                                                    <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/121715738_353421755994447_2417794065107370349_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=bXaRhYwUDLsAX8MqKTC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBpzbFsFUvCZEOcMXFLTgiGSUfqDh0oJblYDgoebsjGOg&oe=66064582" alt="user-img" className="img-fluid rounded-circle"></img>
                                                    <span className="user-status"></span>
                                                </div>
                                                <h5 className="font-size-13 text-truncate mt-3 mb-1">Patrick</h5>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="alice-carousel_stage-item __active __target" style={{ width: '83px' }}>
                                        <div className="item">
                                            <a href="#" className="user-status-box">
                                                <div className="avatar-xs mx-auto d-block chat-user-img online">
                                                    <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/121715738_353421755994447_2417794065107370349_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=bXaRhYwUDLsAX8MqKTC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBpzbFsFUvCZEOcMXFLTgiGSUfqDh0oJblYDgoebsjGOg&oe=66064582" alt="user-img" className="img-fluid rounded-circle"></img>
                                                    <span className="user-status"></span>
                                                </div>
                                                <h5 className="font-size-13 text-truncate mt-3 mb-1">Patrick</h5>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className="alice-carousel__dots"></ul>
                        <div className="alice-carousel__prev-btn"></div>
                        <div className="alice-carousel__next-btn"></div>
                    </div>
                </div>
                <div>
                    <h5 className="mb-3 px-3 font-size-16">Recent</h5>
                    <div data-simplebar="init" className="chat-message-list simplebar-scrollable-y">
                        <div className="simplebar-wrapper" >
                            <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer"></div>
                            </div>
                            <div className="simplebar-mask">
                                <div className="simplebar-offset" >
                                    <div className="simplebar-content-wrapper" tabIndex={0} role="region" aria-label="scrollable content" >
                                        <div className="simplebar-content" >
                                            <ul className="list-unstyled chat-list chat-user-list px-2">
                                                <li id="conversation0" className="">
                                                    <a href="#">
                                                        <div className="d-flex">
                                                            <div className="chat-user-img online align-self-center ms-0">
                                                                <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/121715738_353421755994447_2417794065107370349_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=bXaRhYwUDLsAX8MqKTC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBpzbFsFUvCZEOcMXFLTgiGSUfqDh0oJblYDgoebsjGOg&oe=66064582" alt="chatvia" className="rounded-circle avatar-xs"></img>
                                                            </div>
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-15 mb-1 ms-3">Lê Mạnh</h5>
                                                                <p className="chat-user-message font-size-14 text-truncate mb-0 ms-3"></p>
                                                            </div>
                                                            <div className="font-size-11">02:50 PM</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li id="conversation1" className="">
                                                    <a href="#">
                                                        <div className="d-flex">
                                                            <div className="chat-user-img online align-self-center ms-0">
                                                                <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/121715738_353421755994447_2417794065107370349_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=bXaRhYwUDLsAX8MqKTC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBpzbFsFUvCZEOcMXFLTgiGSUfqDh0oJblYDgoebsjGOg&oe=66064582" alt="chatvia" className="rounded-circle avatar-xs"></img>
                                                            </div>
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-15 mb-1 ms-3">Lê Mạnh</h5>
                                                                <p className="chat-user-message font-size-14 text-truncate mb-0 ms-3"></p>
                                                            </div>
                                                            <div className="font-size-11">02:50 PM</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li id="conversation2" className="">
                                                    <a href="#">
                                                        <div className="d-flex">
                                                            <div className="chat-user-img online align-self-center ms-0">
                                                                <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/121715738_353421755994447_2417794065107370349_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=bXaRhYwUDLsAX8MqKTC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBpzbFsFUvCZEOcMXFLTgiGSUfqDh0oJblYDgoebsjGOg&oe=66064582" alt="chatvia" className="rounded-circle avatar-xs"></img>
                                                            </div>
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-15 mb-1 ms-3">Lê Mạnh</h5>
                                                                <p className="chat-user-message font-size-14 text-truncate mb-0 ms-3"></p>
                                                            </div>
                                                            <div className="font-size-11">02:50 PM</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li id="conversation3" className="">
                                                    <a href="#">
                                                        <div className="d-flex">
                                                            <div className="chat-user-img online align-self-center ms-0">
                                                                <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/121715738_353421755994447_2417794065107370349_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=bXaRhYwUDLsAX8MqKTC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBpzbFsFUvCZEOcMXFLTgiGSUfqDh0oJblYDgoebsjGOg&oe=66064582" alt="chatvia" className="rounded-circle avatar-xs"></img>
                                                            </div>
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-15 mb-1 ms-3">Lê Mạnh</h5>
                                                                <p className="chat-user-message font-size-14 text-truncate mb-0 ms-3"></p>
                                                            </div>
                                                            <div className="font-size-11">02:50 PM</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li id="conversation4" className="">
                                                    <a href="#">
                                                        <div className="d-flex">
                                                            <div className="chat-user-img online align-self-center ms-0">
                                                                <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/121715738_353421755994447_2417794065107370349_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=bXaRhYwUDLsAX8MqKTC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBpzbFsFUvCZEOcMXFLTgiGSUfqDh0oJblYDgoebsjGOg&oe=66064582" alt="chatvia" className="rounded-circle avatar-xs"></img>
                                                            </div>
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-15 mb-1 ms-3">Lê Mạnh</h5>
                                                                <p className="chat-user-message font-size-14 text-truncate mb-0 ms-3"></p>
                                                            </div>
                                                            <div className="font-size-11">02:50 PM</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li id="conversation5" className="">
                                                    <a href="#">
                                                        <div className="d-flex">
                                                            <div className="chat-user-img online align-self-center ms-0">
                                                                <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/121715738_353421755994447_2417794065107370349_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=bXaRhYwUDLsAX8MqKTC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBpzbFsFUvCZEOcMXFLTgiGSUfqDh0oJblYDgoebsjGOg&oe=66064582" alt="chatvia" className="rounded-circle avatar-xs"></img>
                                                            </div>
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-15 mb-1 ms-3">Lê Mạnh</h5>
                                                                <p className="chat-user-message font-size-14 text-truncate mb-0 ms-3"></p>
                                                            </div>
                                                            <div className="font-size-11">02:50 PM</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li id="conversation6" className="">
                                                    <a href="#">
                                                        <div className="d-flex">
                                                            <div className="chat-user-img online align-self-center ms-0">
                                                                <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/121715738_353421755994447_2417794065107370349_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=bXaRhYwUDLsAX8MqKTC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBpzbFsFUvCZEOcMXFLTgiGSUfqDh0oJblYDgoebsjGOg&oe=66064582" alt="chatvia" className="rounded-circle avatar-xs"></img>
                                                            </div>
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-15 mb-1 ms-3">Lê Mạnh</h5>
                                                                <p className="chat-user-message font-size-14 text-truncate mb-0 ms-3"></p>
                                                            </div>
                                                            <div className="font-size-11">02:50 PM</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li id="conversation7" className="">
                                                    <a href="#">
                                                        <div className="d-flex">
                                                            <div className="chat-user-img online align-self-center ms-0">
                                                                <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/121715738_353421755994447_2417794065107370349_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=bXaRhYwUDLsAX8MqKTC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBpzbFsFUvCZEOcMXFLTgiGSUfqDh0oJblYDgoebsjGOg&oe=66064582" alt="chatvia" className="rounded-circle avatar-xs"></img>
                                                            </div>
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-15 mb-1 ms-3">Lê Mạnh</h5>
                                                                <p className="chat-user-message font-size-14 text-truncate mb-0 ms-3"></p>
                                                            </div>
                                                            <div className="font-size-11">02:50 PM</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li id="conversation8" className="">
                                                    <a href="#">
                                                        <div className="d-flex">
                                                            <div className="chat-user-img online align-self-center ms-0">
                                                                <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/121715738_353421755994447_2417794065107370349_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=bXaRhYwUDLsAX8MqKTC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBpzbFsFUvCZEOcMXFLTgiGSUfqDh0oJblYDgoebsjGOg&oe=66064582" alt="chatvia" className="rounded-circle avatar-xs"></img>
                                                            </div>
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-15 mb-1 ms-3">Lê Mạnh</h5>
                                                                <p className="chat-user-message font-size-14 text-truncate mb-0 ms-3"></p>
                                                            </div>
                                                            <div className="font-size-11">02:50 PM</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li id="conversation0" className="">
                                                    <a href="#">
                                                        <div className="d-flex">
                                                            <div className="chat-user-img online align-self-center ms-0">
                                                                <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/121715738_353421755994447_2417794065107370349_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=bXaRhYwUDLsAX8MqKTC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBpzbFsFUvCZEOcMXFLTgiGSUfqDh0oJblYDgoebsjGOg&oe=66064582" alt="chatvia" className="rounded-circle avatar-xs"></img>
                                                            </div>
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-15 mb-1 ms-3">Lê Mạnh</h5>
                                                                <p className="chat-user-message font-size-14 text-truncate mb-0 ms-3"></p>
                                                            </div>
                                                            <div className="font-size-11">02:50 PM</div>
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
                        <div className="simplebar-track simplebar-horizontal" >
                            <div className="simplebar-scrollbar" ></div>
                        </div>
                        <div className="simplebar-track simplebar-vertical" >
                            <div className="simplebar-scrollbar" ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Chats;
