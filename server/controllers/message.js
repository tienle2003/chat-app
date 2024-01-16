import messageModel from "../models/messageModel.js";

const createMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  try {
    const message = await messageModel.create({
      chatId,
      senderId,
      text,
    });
    res.status(201).json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getMessages = async (req, res) => {
  const { chatId } = req.params;
  try {
    const messages = await messageModel.find({ chatId });
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export { createMessage, getMessages };
