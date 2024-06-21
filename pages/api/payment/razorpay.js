import { nanoid } from "nanoid";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const uId = nanoid();
    res.status(200).json({ msg: "Haali gyu ho...", uId });
  }
}
