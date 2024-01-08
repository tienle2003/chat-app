const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/UserModel");

router.post("/register", async (req, res) => {
  const { userName, password, gender, age, likeNumber, avatarImage } = req.body;
  //kiểm tra dữ liệu nhập đủ chưa
  if (!userName || !password || !age || !gender)
    return res
      .status(400)
      .json({ success: false, message: "Bạn chưa nhập đủ dữ liệu" });

  try {
    //check for existing user
    const user = await User.findOne({ userName });
    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Tên người dùng đã tồn tại" });

    //Through all condition
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Create new user
    const newUser = new User({
      userName,
      password: hashedPassword,
      gender,
      age,
      likeNumber,
      avatarImage,
    });

    //Save user to database
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN, {
      expiresIn: "1h",
    });

    res.status(201).json({ success: true, message: "Đăng ký thành công" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

//@router Login

router.post("/login", async (req, res, next) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).json({
      success: false,
      message: "Nhập đủ thông tin tài khoản/mật khẩu",
    });
  }

  try {
    const user = await User.findOne({ userName });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Người dùng không tồn tại" });
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Mật khẩu không đúng" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN, {
      expiresIn: "1h",
    });

    // Send the token in the response
    res.json({ success: true, message: "Đăng nhập thành công", token });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

module.exports = router;
