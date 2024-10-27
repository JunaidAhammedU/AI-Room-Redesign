"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import EmptyState from "./EmptyState";
import Link from "next/link";

const DashboardList = () => {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState<any[]>()
  return (
    <div>
      <div className="flex items-center justify-between ">
        <h1 className="text-3xl font-bold">Hello, {user?.fullName}</h1>
        <Link href="/dashboard/create-new">
        <Button>
          <span className="text-2xl">+</span>Design a new project
        </Button>
        </Link>
      </div>

      {/* list all projects of user */}

      {userRoomList && userRoomList.length > 0 ? (
        <div>
          {userRoomList.map((room) => (
            <div className="my-2" key={room._id}>
              <h1>{room.name}</h1>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default DashboardList;
