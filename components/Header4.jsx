"use client";

import Image from "next/image";

const Header4 = () => {
  return (
    <div className="flex justify-between my-14 border-2 broder-gray-300 p-5 rounded-md px-5">
      <div className="flex items-center">
        <Image
          src={"/fire.jpg"}
          alt="fire"
          width={200}
          height={200}
          className="w-32 h-32 rounded-full mr-5"
        />
        <div className="text-xl">
          <p className="font-bold">Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="email"
          placeholder="e.g. john@gmail.com"
          className="px-6 py-2 mr-5 outline-none border rounded-lg border-gray-300 h-16 w-80"
        />
        <button
          type="submit"
          className="w-32 h-14 bg-red-500 rounded-lg text-md font-bold text-white cursor-pointer"
        >
          Notify me
        </button>
      </div>
    </div>
  );
};

export default Header4;
