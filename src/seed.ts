import Product from "./models/Product";
import User from "./models/User";
import Order from "./models/Order";
import users from "./data/users.json";
import products from "./data/products.json";
import connectDB from "./config/db";
import "colors";
import "dotenv/config";

async function seed() {
  await connectDB();
  try {
    console.log("Truncate all documents".bgCyan);
    await Promise.all([
      Product.deleteMany({}),
      User.deleteMany({}),
      Order.deleteMany({}),
    ]);

    console.log(`Will add ${users.length} users`.bgCyan);
    await User.insertMany(users);

    const user = users.find((user) => user.isAdmin);
    if (!user) throw new Error("Can't add new products without admin user");

    let admin = await User.findOne({ email: user.email });
    console.log(
      `Will add ${admin.firstName + " " + admin.lastName} as an admin`.bgCyan
    );
    console.log(`Will add ${products.length} product`.bgCyan);
    await Product.insertMany(products.map((p) => ({ ...p, user: admin._id })));

    console.log(`Done 💥`);
    process.exit(0);
  } catch (error) {
    console.log(error);
    console.log(error.message.bgRed);
    process.exit(1);
  }
}

seed();
