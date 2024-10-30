import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { Button } from "@/components/ui/button";

function AIOutputDialoge({ openOutputDialog, closeOutputDialog, FIRST_IMAGE, SECOND_IMAGE }: any) {
    console.log(FIRST_IMAGE, SECOND_IMAGE)
  return (
    <>
sas
    </>
    // <AlertDialog open={openOutputDialog}>
    //   <AlertDialogContent>
    //     <AlertDialogHeader>
    //       <AlertDialogTitle>Result</AlertDialogTitle>
    //       <ReactBeforeSliderComponent
    //         firstImage={FIRST_IMAGE}
    //         secondImage={SECOND_IMAGE}
    //       />
    //       <Button onClick={() => closeOutputDialog(false)}>Close</Button>
    //     </AlertDialogHeader>
    //   </AlertDialogContent>
    // </AlertDialog>
  );
}

export default AIOutputDialoge;
