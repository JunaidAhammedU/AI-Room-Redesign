// Header.tsx
'use client'

import { UserDetailContext } from "@/app/_context/userDetailContext";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";


function Header() {
  const context = useContext(UserDetailContext);

  if (!context) {
    return null;
  }

  const { userDetails } = context;
  return (
    <div className="p-4 shadow-sm flex justify-between items-center">
      <Link href={"/dashboard"}>
        <div className="flex gap-4 items-center cursor-pointer">
          <Image src={"/logo.svg"} width={40} height={40} alt="logo" />
          <h2 className="font-bold text-lg">Redo</h2>
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
