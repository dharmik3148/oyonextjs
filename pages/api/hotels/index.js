import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  connectDB();
  //   if (req.method === "POST") {
  //     const newHotel = new Hotel(req.body);
  //     const result = await newHotel.save();
  //     res.status(200).json({ msg: "New hotel added", result });
  //   }

  if (req.method === "GET") {
    const hotels = await Hotel.find({ location: req.query.city });

    if (hotels.length > 0) {
      return res.status(200).json({ msg: "Hotels", hotels });
    }

    const allHotels = await Hotel.find({});

    res.status(200).json({ msg: "Hotels", allHotels });
  }
}
