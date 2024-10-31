import React, { useState } from "react";
import { BeforeAfter } from "./BeforeAfterComponent";
import ViewAndEditDialoge from "./ViewAndEditDialoge";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

function RoomListCard({ room }: any) {
  const [openOutputDialog, setOpenOutputDialog] = useState(false);
  const onClickHandler = () => {
    setOpenOutputDialog(true);
  };
  const onCloseDialogHandler = () => {
    setOpenOutputDialog(false);
  };
  return (
    <>
      <div
        className="shadow-md rounded-b-md cursor-pointer"
        onClick={onClickHandler}
      >
         <ReactBeforeSliderComponent
         className="listCard"
            firstImage={{ imageUrl: room?.aiImage }}
            secondImage={{ imageUrl: room?.orgImage }}
          />
        <div className="p-2">
          <h2 className="text-sm ">{`${room?.roomType} with ${room?.designType} design ✨`}</h2>
        </div>
      </div>

      <ViewAndEditDialoge
        orgImage={room?.orgImage}
        aiImageUrl={room?.aiImage}
        openOutputDialog={openOutputDialog}
        onCloseDialog={onCloseDialogHandler}
      />
    </>
  );
}

export default RoomListCard;
