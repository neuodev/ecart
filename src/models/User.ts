import mongoose, { InferSchemaType, Schema, Document, Model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, `Please add a first name`],
    },
    lastName: {
      type: String,
      required: [true, `Please add a last name`],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, `Please Add Password`],
      minLength: [7, "Password must be at lest 7 chars "],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

export type IUser = InferSchemaType<typeof UserSchema> & { _id: string };
interface IUserMethods {
  getSignedJwtToken(): string;
  matchPassword(password: string): Promise<boolean>;
  getResetPasswordToken(): string;
  fullName(): string;
}

type UserModel = Model<IUser, {}, IUserMethods>;

// Encrypt password
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Match user entered password
UserSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.methods.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token and set to resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model<IUser, UserModel>("User", UserSchema);
export default User;
