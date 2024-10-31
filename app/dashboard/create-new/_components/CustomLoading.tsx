import {
  AlertDialog,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import React from "react";

export default function CustomLoading({loading} : {loading: boolean}) {
  return (
    <>
      <AlertDialog open={loading}>
        <AlertDialogContent>
            <div className="flex flex-col items-center bg-white">
                <Image src={"/Loading.gif"} className="object-cover" width={150} height={150} alt="loading" />
            </div>
            <h1 className="text-center">Redesigning your room..., Do not refresh</h1>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
