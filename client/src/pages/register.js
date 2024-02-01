import React, { useState } from "react";
import "./register.css";

const Register = () => {
  // create state to save value of inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const [isInputFocused, setIsInputFocused] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  // process event after the value of inputs was changed
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Kiểm tra Confirm Password và cập nhật trạng thái lỗi
    if (name === "confirmPassword") {
      setErrors({
        ...errors,
        [name]: value !== formData.password
      });
    } else {
      setErrors({
        ...errors,
        [name]: false
      });
    }
  };

  const handleInputFocus = (name) => {
    setIsInputFocused({
      ...isInputFocused,
      [name]: true
    });
  };

  const handleInputBlur = (name) => {
    setIsInputFocused({
      ...isInputFocused,
      [name]: false
    });
  };

  // process event when clicking on "Sign Up"
  const handleSignUp = (e) => {
    e.preventDefault();
    // Kiểm tra các điều kiện và cập nhật trạng thái lỗi
    const newErrors = {
      username: formData.username === "",
      email: formData.email === "",
      password: formData.password === "",
      confirmPassword: formData.password !== formData.confirmPassword
    };

    // Kiểm tra xem mật khẩu nhập vào trường Confirm Password có khớp với mật khẩu nhập vào trường Password không
    if (formData.password !== formData.confirmPassword && formData.confirmPassword !== "") {
      newErrors.confirmPassword = true; 
    }
    setErrors(newErrors);

    // Kiểm tra trạng thái lỗi trước khi submit form
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    // Tiến hành xử lý đăng ký nếu không có lỗi
  };

  return (
    <div className="register-page">
      <div className="register-layout">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="120"
            height="120"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M4.929 19.071A9.969 9.969 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929zM11 6v12h2V6h-2zM7 9v6h2V9H7zm8 0v6h2V9h-2z"
              fill="#ffffff"
            />
          </svg>
          <h1>Chat App</h1>
        </div>
        <div>
          <h2>Welcome to Chat App!</h2>
          <p>Share Your Smile with this world and Find Friends</p>
          <p>Free messages and calls to all friends and make messaging fun with trending memes.</p>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#fff" class="bi bi-cup-hot" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5M2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175" />
            <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8" />
          </svg>
          <span>Enjoy...!</span>
        </div>
      </div>
      <div className="register-form">
        <h1>Sign Up Here</h1>
        <form className="register-form-d1">
          <div className={`input-box ${errors.username && 'error'} ${isInputFocused.username && 'focused'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
            <div className="input-wrap">
              <input className={errors.username ? "for-username error" : "for-username"} type="text" id="username" name="username" placeholder="Username" value={formData.username} onChange={handleChange} aria-describedby={errors.username ? "username-error" : null} />
              {errors.username && <small className="error-message">Vui lòng nhập Username</small>}
            </div>
          </div>
          <div className={`input-box ${errors.email && 'error'} ${isInputFocused.email && 'focused'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
              <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
            </svg>
            <div className="input-wrap">
              <input className={errors.email ? "for-email error" : "for-email"} type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} aria-describedby={errors.email ? "email-error" : null} />
              {errors.email && <small className="error-message">Vui lòng nhập Email</small>}
            </div>
          </div>
          <div className={`input-box ${errors.password && 'error'} ${isInputFocused.password && 'focused'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16">
              <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
              <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415" />
            </svg>
            <div className="input-wrap">
              <input className={errors.password ? "for-password error" : "for-password"} type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} aria-describedby={errors.password ? "password-error" : null} />
              {errors.password && <small className="error-message">Vui lòng nhập Password</small>}
            </div>
          </div>
          <div className={`input-box ${errors.confirmPassword && 'error'} ${isInputFocused.confirmPassword && 'focused'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16">
              <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
              <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415" />
            </svg>
            <div className="input-wrap">
              <input className={errors.confirmPassword ? "for-confirm-password error" : "for-confirm-password"} type="password" id="confirm-password" name="confirmPassword" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} aria-describedby={errors.confirmPassword ? "confirmPassword-error" : null} />
              {errors.confirmPassword && <small className="error-message">
                {formData.confirmPassword === "" ? "Vui lòng nhập Confirm password" : "Mật khẩu không khớp"}
              </small>}
            </div>
          </div>
          <p>If you have already got an account. <a href="/login">Login Now</a></p>
        </form>
        <div className="register-btn-box">
          <button className="register-btn" type="submit" onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
