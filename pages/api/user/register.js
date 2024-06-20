import connectDB from "@/db";
import { signJwtToken } from "@/helper/jwt-helper";
import { hashPassword } from "@/helper/pwd-helper";
import User from "@/models/user-model";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB();

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const emailExist = await User.findOne({ email: email });

    if (emailExist) {
      return res.status(400).json({ msg: "User already registered" });
    }

    const hashedPwd = await hashPassword(password, 10);

    const newUser = new User({ name: name, email: email, password: hashedPwd });

    const result = await newUser.save();

    const genToken = await signJwtToken(result._id, "Code_DK", "30d");

    res
      .status(200)
      .json({ msg: "User registered", user: result, token: genToken });
  }
}
