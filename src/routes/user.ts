import express from "express";
import {
  authUser,
  registerUser,
  getUserAccount,
  updateUserAccount,
  deleteUserAccount,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  forgotPassword,
} from "../controllers/userController";
import { authorize, protect } from "../middleware/auth";

const userRouter = express.Router();
userRouter.route("/").post(registerUser).get(protect, authorize, getUsers);
userRouter.post("/login", authUser);
userRouter
  .route("/account")
  .get(protect, getUserAccount)
  .put(protect, updateUserAccount)
  .delete(protect, deleteUserAccount);
userRouter.post("/forgetPassword", protect, forgotPassword);
userRouter
  .route("/:id")
  .delete(protect, authorize, deleteUser)
  .get(protect, authorize, getUserById)
  .put(protect, authorize, updateUser);

export default userRouter;
