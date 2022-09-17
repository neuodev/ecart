import asyncHandler from "express-async-handler";
import User from "../models/User";
import ErrorResponse from "../utils/ErrorResponse";
import sendEmail from "../utils/sendEmail";

// @Desc    Auth user & get token
// @Route   POST /api/users/login
// @Access  Public
const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!password) {
    return next(new ErrorResponse("Password is required", 400));
  }

  if (user && (await user.matchPassword(password))) {
    const token = user.getSignedJwtToken();
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    });
  } else {
    next(new ErrorResponse("Invalid email or password", 401));
  }
});

// @Desc    Register a new user
// @Route   POST /api/users
// @Access  Public
const registerUser = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(new ErrorResponse("User already exist", 401));
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });
  const token = user.getSignedJwtToken();
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    });
  } else {
    next(new ErrorResponse(`Invalid User Data`, 400));
  }
});
// @Desc    Get user account
// @Route   GET /api/users/account
// @Access  Private
const getUserAccount = asyncHandler(async (req, res, next) => {
  const id = req.user._id;
  const user = await User.findById(id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    next(new ErrorResponse("User Not Found"));
  }
});

// @Desc    Get all users
// @Route   GET /api/users
// @Access  Private/Admin
const getUsers = asyncHandler(async (req, res, next) => {
  const count = await User.countDocuments();
  const users = await User.find({});
  res.json({ users, count });
});

// @Desc    Delete user
// @Route   DELETE /api/users/:id
// @Access  Private/Admin
const deleteUser = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user) {
    return next(new ErrorResponse(`User Not Found `, 404));
  }

  await user.remove();
  res.json({ message: "User removed" });
});

// @Desc    Delete Account form user it self
// @Route   DELETE /api/users/account
// @Access  Private User
const deleteUserAccount = asyncHandler(async (req, res, next) => {
  const id = req.user._id;
  const user = await User.findById(id);
  if (!user) {
    return next(new ErrorResponse(`User Not Found `, 404));
  }

  await user.remove();
  res.json({ message: "User removed" });
});

// @Desc    Get user by ID
// @Route   GET /api/users/:id
// @Access  Private/Admin
const getUserById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(id).select("-password");

  if (user) {
    res.json(user);
  } else {
    return next(new ErrorResponse(`User Not Found `, 404));
  }
});

// @Desc    Update user account
// @Route   PUT /api/users/account
// @Access  Private
const updateUserAccount = asyncHandler(async (req, res, next) => {
  const id = req.user._id;
  const { name, email, password } = req.body;
  const user = await User.findById(id);

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    if (typeof password === "string") {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    const token = user.getSignedJwtToken();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token,
    });
  } else {
    next(new ErrorResponse("User Not Found"));
  }
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const { name, email, isAdmin } = req.body;
  const user = await User.findById(id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (typeof isAdmin === "boolean") {
      user.isAdmin = isAdmin;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    next(new ErrorResponse("User not found"));
  }
});

// @Desc      Forgot password
// @Route     POST /api/v1/users/forgotpassword
// @Access    Public
const forgotPassword = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return next(new ErrorResponse("Please add email", 404));
  }
  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorResponse("There is no user with that email", 404));
  }

  // Get reset token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  // Create reset url
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/auth/resetpassword/${resetToken}`;

  const message = `You are receiving this email 
  because you (or someone else) has requested the 
  reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Password reset token",
      message,
    });
    console.log("email sending ");
    res.status(200).json({ success: true, data: "Email sent" });
  } catch (err) {
    console.log(err);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorResponse("Email could not be sent", 500));
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

export {
  authUser,
  registerUser,
  getUserAccount,
  getUsers,
  updateUser,
  updateUserAccount,
  deleteUser,
  deleteUserAccount,
  getUserById,
  forgotPassword,
};
