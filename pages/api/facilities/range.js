import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  connectDB();
  if (req.method === "GET") {
    const price = req.query.price;
    const hotels = await Hotel.find({ price: { $lte: price } });

    res.status(200).json({ msg: "All Good", hotels });
  }
}
