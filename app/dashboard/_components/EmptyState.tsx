import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-5">
      <Image src={"/emptyImg.png"} width={300} height={300} alt="empty" />
      <h2 className="font-medium text-xl text-gray-500">
        Oops.!, No data found. Create your first project with AI
      </h2>
{/* 
      <Link href="/dashboard/create-new">
        <Button className="mt-4">
          <span className="text-2xl">+</span>Design a new project
        </Button>
        </Link> */}
    </div>
  );
}

export default EmptyState;
