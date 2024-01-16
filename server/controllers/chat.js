import chatModel from "../models/chatModel.js";

const createChat = async (req, res) => {
  const { senderId, receiverId } = req.body;
  try {
    const chat = await chatModel.findOne({
      members: { $all: [senderId, receiverId] },
    });
    if (chat) return res.status(200).json(chat);

    const newChat = await chatModel.create({
      members: [senderId, receiverId],
    });

    res.status(201).json(newChat);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findUserChats = async (req, res) => {
  const { userId } = req.params;
  try {
    const userChats = await chatModel.find({
      members: { $in: [userId] },
    });
    res.status(200).json(userChats);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findChat = async (req, res) => {
  const { senderId, receiverId } = req.params;
  try {
    const chat = chatModel.findOne({
      members: { $all: [senderId, receiverId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export { createChat, findUserChats, findChat };
