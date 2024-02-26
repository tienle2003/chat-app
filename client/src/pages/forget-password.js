import React from "react";
import "./css/common.css";


const ResetPassword = () => {
    const resetPasswordLogoStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    return (
        <div className="login-page my-5 pt-sm-5">
            <div className="container">
                <div className="justify-content-center row">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="text-center mb-4">
                            <a className="auth-logo mb-5 d-block" href="#">
                                <div style={resetPasswordLogoStyle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z" /><path d="M4.929 19.071A9.969 9.969 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929zM11 6v12h2V6h-2zM7 9v6h2V9H7zm8 0v6h2V9h-2z" fill="rgba(114,105,239,1)" /></svg>
                                    <span className="logo-text">Chatvia</span>
                                </div>
                            </a>
                            <h4>Lock Screen</h4>
                            <p className="text-muted mb-4">
                                Enter your password to unlock the screen!
                            </p>
                        </div>
                        <div className="card">
                            <div className="p-4 card-body">
                                <div className="p-3">
                                    <div className="text-center mb-4 alert alert-success fade show">
                                        Enter your Email and instructions will be sent to you!
                                    </div>
                                    <form className="">
                                        <div className="mb-4 mb-3">
                                            <label className="form-label form-label">Password</label>
                                            <div className="input-group bg-soft-light rounded-3 mb-3 input-group">
                                                <span className="input-group-text text-muted">
                                                    <i class="fa-regular fa-envelope"></i>
                                                </span>
                                                <input id="password" name="password" placeholder="Enter password" type="password" className="form-control form-control-lg bg-soft-light border-light is-invalid form-control" ></input>
                                                <div className="invalid-feedback" type="invalid">Please Enter Your Password</div>
                                            </div>
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className=" waves-effect waves-light btn btn-primary d-block w-100">Unlock</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <p>
                                Not you ? return
                                <a className="font-weight-medium text-primary" href="/login"> Sign in</a>
                            </p>
                            <p>
                                <i class="ic-copyright fa-regular fa-copyright"></i>
                                2024 Chatvia. Crafted with <i class="ic-heart fa-solid fa-heart"></i> by Themesbrand
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;