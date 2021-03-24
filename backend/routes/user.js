const express = require('express');
const userRouter = express.Router();
const {
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
} = require('../controllers/userController');
const { authorize, protect } = require('../middleware/auth');

userRouter.route('/').post(registerUser).get(protect, authorize, getUsers);

userRouter.post('/login', authUser);
userRouter
  .route('/account')
  .get(protect, getUserAccount)
  .put(protect, updateUserAccount)
  .delete(protect, deleteUserAccount);
userRouter.post('/forgetPassword', protect, forgotPassword);
userRouter
  .route('/:id')
  .delete(protect, authorize, deleteUser)
  .get(protect, authorize, getUserById)
  .put(protect, authorize, updateUser);

module.exports = userRouter;
