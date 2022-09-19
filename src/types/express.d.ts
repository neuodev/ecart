import { IUser, IUserMethods } from "../models/User";

declare global {
  namespace Express {
    interface Request {
      user?: IUser & IUserMethods;
    }
  }
}
