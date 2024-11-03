'use client';

import { UserDetailContext } from "@/app/_context/userDetailContext";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { Nunito } from "next/font/google";

const artifexFont = Nunito({ subsets: ["latin"] });

function Header() {
  const context = useContext(UserDetailContext);

  if (!context) {
    return null;
  }

  const { userDetails } = context;
  return (
    <div className="p-4 shadow-sm flex justify-between items-center z-50 sticky top-0 bg-white ">
      <Link href={"/dashboard"}>
        <div className="flex gap-1 items-center cursor-pointer">
          <Image src={"/logo.png"} width={60} height={60} alt="logo" />
          <h2 className={`${artifexFont.className} font-extrabold text-3xl`}>Artifex.ai</h2>
        </div>
      </Link>
      
      <div className="flex gap-4 items-center">
        <Link href={"/dashboard/buy-credits"}><h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 hover:bg-gradient-to-l cursor-pointer">Buy credits</h1></Link>
        <div className="flex items-center gap-2 border border-gray-100 rounded-full px-3 py-1 shadow-sm">
          <Image
            src={"/star.png"}
            width={20}
            height={20}
            alt="logo"
            className="rounded-full"
          />
          <h3>{userDetails?.credits}</h3>
        </div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
