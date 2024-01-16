import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/UserModel.js";
import cloudinary from "../configs/cloudinary.js";

const register = async (req, res) => {
  const { userName, password, gender, age, likeNumber } = req.body;
  let { avatarImage } = req.body;
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
    if (avatarImage) {
      avatarImage = await cloudinary.uploader.upload(avatarImage, {
        upload_preset: "chat_app",
      });
    }
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

    res.status(201).json({ success: true, message: "Đăng ký thành công" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
};

const login = async (req, res) => {
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
};

export { register, login };
