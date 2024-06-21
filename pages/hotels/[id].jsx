"use client";

import Header1 from "@/components/Header1";
import Cookies from "js-cookie";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SingleHotel = ({ hotel }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const isAuth = Cookies.get("user");
    if (isAuth) {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, [auth]);

  return (
    <>
      <Head>
        <title>{hotel.name}</title>
        <meta name="description" content={hotel.description} />
      </Head>
      <Header1 />
      <div className="w-7/12 mx-auto my-10">
        <Image
          src={hotel.banner}
          alt="hotel"
          width={2000}
          height={2000}
          className="w-full h-large-box my-5 mx-auto rounded-lg"
        />
        <div className="">
          <h3 className="text-3xl font-bold">{hotel.name}</h3>
          <p className="text-xl my-5 text-justify">{hotel.description}</p>
          <button className="w-60 h-14 rounded-lg bg-blue-400 hover:bg-blue-500 font-semibold text-lg">
            Price : &#8377; {hotel.price}
          </button>
          <p className="text-3xl font-bold my-5">Facilities : </p>
          <ul className="flex text-[18px] font-semibold gap-5">
            {hotel
              ? hotel?.facilities.map((ele, id) => {
                  return (
                    <li className="flex gap-2 items-center" key={id}>
                      <Image
                        src={ele.img}
                        alt={`img/${id}`}
                        width={200}
                        height={200}
                        className="w-7 h-7"
                      />
                      {ele.name}
                    </li>
                  );
                })
              : ""}
          </ul>
          {auth ? (
            <Link href={`/payment/${hotel?._id}`}>
              <button className="w-60 h-14 rounded-lg bg-red-400 hover:bg-red-500 font-semibold my-5 text-lg">
                Book Now
              </button>
            </Link>
          ) : (
            <span className="text-xl">
              Please
              <Link href={"/login"} className="text-blue-500">
                Login
              </Link>
              to get new offers !
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
  const data = await res.json();
  return {
    props: {
      hotel: data.hotel,
    },
  };
}

export default SingleHotel;
