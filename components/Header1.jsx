"use client";

import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header1 = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const isAuth = Cookies.get("user");
    if (isAuth) {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, [auth]);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };

  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-20 px-10">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={150}
          height={150}
          className="w-20 h-full"
        />
      </Link>
      <div className=" h-full flex">
        <Block title={"Become a member"} para={"Additional 10% off on stays"} />
        <Block title={"Oyo for business"} para={"trusted by 5000 corporates"} />
        <Block
          title={"List your properties"}
          para={"Start earning in 30 mins"}
        />
        <Block title={"+61 450545698"} para={"Call us to book now "} />
        <div className="flex items-center px-3 font-bold">
          <Image
            src={"/demo.svg"}
            alt="demo"
            width={200}
            height={200}
            className="w-11 h-11 p-2  mr-2"
          />
          {auth ? (
            <h3 onClick={handleLogout} className="hover:cursor-pointer">
              Logout
            </h3>
          ) : (
            <Link href={"/login"}>
              <h3>Login / Signup</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
