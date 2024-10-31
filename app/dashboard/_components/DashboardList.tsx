"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { use, useEffect, useState } from "react";
import EmptyState from "./EmptyState";
import Link from "next/link";
import axios from "axios";
import RoomListCard from "./RoomListCard";

const DashboardList = () => {
  const { user } = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const [userRoomList, setUserRoomList] = useState<any[]>([]);

  const getAllUserRooms = async () => {
    try {
      const response = await axios.post("/api/get-user-rooms", { userEmail });
      setUserRoomList(response.data.result);
    } catch (error) {
      console.error("Error fetching user rooms:", error);
    }
  };

  useEffect(() => {
    getAllUserRooms();
  }, [user]);

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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 w-[80%] h-[80%]">
          {userRoomList.map((room, index) => (
            <div className="p-3">
              <RoomListCard key={index} room={room} />
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
