"use client";

import { UserDetailContext } from "@/app/_context/userDetailContext";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { Nunito } from "next/font/google";

const artifexFont = Nunito({ subsets: ["latin"] });

function Header() {
  const context = useContext(UserDetailContext);
  const { user } = useUser();
  if (!context) {
    return null;
  }

  const { userDetails } = context;

  return (
    <div className="p-4 shadow-sm flex justify-between items-center z-50 sticky top-0 bg-white">
      <Link href={"/dashboard"}>
        <div className="flex gap-1 items-center cursor-pointer">
          <Image
            src={"/logo.png"}
            width={40}
            height={40}
            alt="logo"
            className="sm:w-12 sm:h-12"
          />
          <h2
            className={`${artifexFont.className} font-extrabold text-xl sm:text-3xl`}
          >
            Artifex.ai
          </h2>
        </div>
      </Link>

      <div className="flex gap-2 sm:gap-4 items-center">
        {user?.primaryEmailAddress?.emailAddress ? (
          <>
            <Link href={"/dashboard/buy-credits"}>
              <h1 className="text-sm sm:text-base bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 hover:bg-gradient-to-l cursor-pointer">
                Buy credits
              </h1>
            </Link>

            {/* Updated credits section for mobile view */}
            <div className="flex items-center gap-2 border border-gray-100 rounded-full px-2 sm:px-3 py-1 shadow-sm">
              <Image
                src={"/star.png"}
                width={16}
                height={16}
                alt="logo"
                className="rounded-full sm:w-5 sm:h-5"
              />
              <h3 className="text-sm sm:text-base">{userDetails?.credits}</h3>
            </div>
          </>
        ) : (
          <Link href={"/sign-in"}>
            <h1 className="text-sm sm:text-base cursor-pointer px-4 py-2 shadow-sm rounded-md">
              Login
            </h1>
          </Link>
        )}

        <UserButton />
      </div>
    </div>
  );
}

export default Header;
