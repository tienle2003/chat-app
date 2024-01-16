import User from "../models/UserModel.js";

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
};

const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const users = await User.findById(userId);
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
};

export { getUsers, getUserById };
