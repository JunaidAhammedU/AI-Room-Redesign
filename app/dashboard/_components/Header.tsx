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
    <div className="px-4 py-3 backdrop-blur-md bg-white/80 border-b border-gray-100 flex justify-between items-center z-50 sticky top-0 transition-all duration-300">
      <Link href={"/dashboard"}>
        <div className="flex gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity">
          <Image
            src={"/logo.png"}
            width={40}
            height={40}
            alt="logo"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <h2
            className={`${artifexFont.className} font-extrabold text-lg sm:text-2xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent`}
          >
            Artifex.ai
          </h2>
        </div>
      </Link>
      <div className="flex gap-3 sm:gap-5 items-center">
        {user?.primaryEmailAddress?.emailAddress ? (
          <>
            <Link href={"/dashboard/buy-credits"}>
              <button className="text-sm sm:text-base px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium">
                Buy credits
              </button>
            </Link>

            <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1.5 hover:bg-gray-100 transition-colors duration-200">
              <Image
                src={"/star.png"}
                width={16}
                height={16}
                alt="logo"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <h3 className="text-sm sm:text-base font-medium text-gray-700">
                {userDetails?.credits}
              </h3>
            </div>
          </>
        ) : (
          <Link href={"/sign-in"}>
            <button className="text-sm sm:text-base px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200">
              Login
            </button>
          </Link>
        )}

        <div className="hover:opacity-80 transition-opacity">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}

export default Header;
