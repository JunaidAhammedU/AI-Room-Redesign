import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

function ViewAndEditDialoge({
  openOutputDialog,
  onCloseDialog,
  orgImage,
  aiImageUrl,
}: any) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = aiImageUrl;
    link.target = "_blank"; // Open in a new tab if needed
    link.download = "ai-generated-image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <div className="flex justify-center gap-4 mt-4">
            {/* Download Button */}
            <Button onClick={handleDownload}>Download</Button>
            {/* Close Button */}
            <Button onClick={() => onCloseDialog(false)}>Close</Button>
          </div>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ViewAndEditDialoge;
