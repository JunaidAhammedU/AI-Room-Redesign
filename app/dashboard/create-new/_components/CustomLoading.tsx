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
                <Image src={"/Loading.gif"} width={100} height={100} alt="loading" />
            </div>
            <h1>Redesigning your room..., Do not refresh</h1>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
