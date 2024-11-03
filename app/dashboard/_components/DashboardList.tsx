"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import EmptyState from "./EmptyState";
import Link from "next/link";
import axios from "axios";
import RoomListCard from "./RoomListCard";
import { SkeletonCard } from "./SkeletonCard";

const DashboardList = () => {
  const { user } = useUser();
  const skelton = [1,2,3,4,5,6]
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const [userRoomList, setUserRoomList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getAllUserRooms = async () => {
    try {
      const response = await axios.post("/api/get-user-rooms", { userEmail });
      setUserRoomList(response.data.result);
    } catch (error) {
      console.error("Error fetching user rooms:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userEmail) {
      getAllUserRooms();
    }
  }, [userEmail]);

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
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 w-[100%] h-[100%]">
          {skelton.map((data, ind) => <SkeletonCard key={ind} />)}
        </div>
      ) : userRoomList.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 w-[100%] h-[100%]">
          {userRoomList.map((room, index) => (
            <div key={index} className="p-3">
              <RoomListCard room={room} />
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
