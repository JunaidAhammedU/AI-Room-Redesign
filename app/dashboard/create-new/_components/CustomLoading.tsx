import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import Image from "next/image";
import React from "react";

export default function CustomLoading({ loading }: { loading: boolean }) {
  return (
    <>
      <AlertDialog open={loading}>
        <AlertDialogContent>
          <div className="flex flex-col items-center bg-white">
            <Image
              src={"/Loading.gif"}
              className="object-cover"
              width={150}
              height={150}
              alt="loading"
            />
          </div>
          <h1 className="text-center text-xl">Redesigning your room...</h1>
          <p className="text-center  text-sm text-gray-500">
            This may take a few seconds
          </p>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
