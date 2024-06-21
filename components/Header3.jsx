"use client";

import Link from "next/link";
import { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState("");

  return (
    <div className="bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] h-60">
      <div className="p-5">
        <h2 className="text-4xl text-white text-center font-bold">
          Over 157,000 hotels and homes across 35 countries.
        </h2>
        <div className="grid grid-cols-5 my-5 mx-20">
          <input
            type="text"
            placeholder="City..."
            className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-4"
            onChange={(e) => setCity(e.target.value)}
          />
          {/* <input
            type="date"
            placeholder="Search..."
            className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />
          <input
            type="date"
            placeholder="Search..."
            className="h-16 outline-none px-3 text-lg col-span-1"
          /> */}
          <button
            type="submit"
            className="flex h-16 col-span-1 bg-green-600 hover:cursor-pointer hover:bg-green-700 text-white text-xl font-bold"
          >
            <Link
              href={`/hotels?city=${city}`}
              className="h-full w-full flex justify-center items-center"
            >
              Search
            </Link>
          </button>
        </div>
        <div className="flex mx-20 my-5 font-bold">
          <button
            type="submit"
            className="h-13 px-3 py-2 hover:cursor-pointer text-white mr-5"
          >
            Continue your search
          </button>
          <button
            type="submit"
            className="h-13 px-3 py-2 border-2 border-white rounded-md hover:cursor-pointer text-white hover:bg-gray-500 mr-5"
          >
            Homestay in India hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
