import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { BeforeAfter } from "./BeforeAfterComponent";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

function ViewAndEditDialoge({
  openOutputDialog,
  onCloseDialog, // Corrected this line
  orgImage,
  aiImageUrl,
}: any) {
  return (
    <AlertDialog open={openOutputDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-lg">
            Here is your result.
          </AlertDialogTitle>
          <ReactBeforeSliderComponent
            firstImage={{ imageUrl: orgImage }}
            secondImage={{ imageUrl: aiImageUrl }}
          />
          <Button onClick={() => onCloseDialog(false)}>Close</Button>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ViewAndEditDialoge;
