import authRouter from "./auth.js";
import userRouter from "./user.js";
import chatRouter from "./chat.js";
import messageRouter from "./message.js";

const initRoutes = (app) => {
  app.use("/auth", authRouter);
  app.use("/users", userRouter);
  app.use("/chats", chatRouter);
  app.use("/messages", messageRouter);
};

export default initRoutes;
