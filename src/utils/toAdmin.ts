import User from "../models/User";
import "colors";

export const toAdmin = async (id: string) => {
  try {
    let user = await User.findOne({ _id: id });
    if (!user) throw new Error("User not found");
    if (user.isAdmin === true) {
      console.log(`${user.fullName()} is already an admin`.bgYellow.bold);
      return;
    }
    await User.findOneAndUpdate(
      {
        _id: id,
      },
      {
        isAdmin: true,
      }
    );

    console.log(`${user.fullName()} is now an admin`.bgGreen);
  } catch (error) {
    console.log(error.message.red.underline);
  }
};
// regex to match "role:id"
let re = /(user|admin):(\w+)/;
let arg = process.argv[2];
if (re.test(arg)) {
  let match = arg.match(re);
  let role = match[1];
  let userId = match[2];
  if (role == "admin") {
    toAdmin(userId);
  }
}
