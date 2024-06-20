import connectDB from "@/db";
import { signJwtToken } from "@/helper/jwt-helper";
import { matchPassword } from "@/helper/pwd-helper";
import User from "@/models/user-model";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB();

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const emailExist = await User.findOne({ email });
    if (!emailExist) {
      return res.send(400).json({ msg: "Please register first" });
    }

    const pwd = await matchPassword(password, emailExist.password);

    if (!pwd) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const genToken = await signJwtToken(emailExist._id, "Code_DK", "30d");

    res.status(200).json({ msg: "User logged in", token: genToken });
  }
}
