import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { BeforeAfter } from "./BeforeAfterComponent";

function AIOutputDialoge({
  openOutputDialog,
  closeOutputDialog,
  orgImage,
  aiImageUrl,
}: any) {
  return (
    <AlertDialog open={openOutputDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-lg"> Here is your result.</AlertDialogTitle>
          <BeforeAfter beforeImage={orgImage} afterImage={aiImageUrl} />
          <Button onClick={() => closeOutputDialog(false)}>Close</Button>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AIOutputDialoge;
