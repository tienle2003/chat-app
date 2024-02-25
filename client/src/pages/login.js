import React, { useState } from "react";
import "./css/common.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const loginLogoStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  const navigate = useNavigate();

  return (
    <div className="login-page my-5 pt-sm-5">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="text-center mb-4">
              <a className="auth-logo mb-5 d-block" href="#">
                <div style={loginLogoStyle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z" /><path d="M4.929 19.071A9.969 9.969 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929zM11 6v12h2V6h-2zM7 9v6h2V9H7zm8 0v6h2V9h-2z" fill="rgba(114,105,239,1)" /></svg>
                  <span className="logo-text">Chatvia</span>
                </div>
              </a>
              <h4>Sign in</h4>
              <p className="text-muted mb-4">
                Sign in to continue to Chatvia.
              </p>
            </div>
            <div className="card">
              <div className="p-4 card-body">
                <div className="p-3">
                  <form className="">
                    <div className="mb-3">
                      <label className="form-label form-label">Username</label>
                      <div className="mb-3 bg-soft-light rounded-3 input-group">
                        <span className="input-group-text text-muted" id="basic-addon-3">
                          <i class="fa-regular fa-user"></i>
                        </span>
                        <input id="email" name="email" placeholder="Enter email" type="text" className="form-control form-control-lg border-light bg-soft-light is-invalid form-control" ></input>
                        <div className="invalid-feedback" type="invalid">Please Enter Your Username</div>
                      </div>
                    </div>
                    <div className="mb-4 mb-3">
                      <div className="float-end">
                        <a href="/forget-password" className="text-muted font-size-13">Forgot password?</a>
                      </div>
                      <label className="form-label form-label">Password</label>
                      <div className="mb-3 bg-soft-light rounded-3 input-group">
                        <span className="input-group-text text-muted">
                          <i class="fa-solid fa-lock"></i>
                        </span>
                        <input type="password" id="password" name="password" placeholder="Enter password" className="form-control form-control-lg border-light bg-soft-light is-invalid form-control" ></input>
                        <div className="invalid-feedback" type="invalid">Please Enter Your Password</div>
                      </div>
                    </div>
                    <div className="form-check mb-4">
                      <input id="remember-check" type="checkbox" className="form-check-input form-check-input"></input>
                      <label for="remember-check" className="form-check-label form-label" id="remember-checkbox">Remember me</label>
                    </div>
                    <div className="d-grid">
                      <button type="submit" className=" waves-effect waves-light btn btn-primary d-block w-100">Sign in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <p>
                Don't have an account ?
                <a href="/register" className="font-weight-medium text-primary"> Register now</a>
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

export default Login;
