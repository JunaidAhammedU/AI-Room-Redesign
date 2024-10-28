"use client";

import React from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import TextArea from "./_components/TextArea";
import { Button } from "@/components/ui/button";

export default function CreateNew() {
  const [formData, setFormData] = React.useState<any>({});
  const onHandleInput = (value: any, fieldName: string) => {
    setFormData((prev: any) => ({ ...prev, [fieldName]: value }));

    console.log(formData);
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">
        Get ready to experience the magic of interior design with Redo AI
      </h2>
      <p className="text-center text-gray-500">
        Redesign your existing space with our AI interior redesign tool. Just
        upload a photo, select a style, and let us do the rest.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        <ImageSelection
          selectedFile={(selectedFile: any) =>
            onHandleInput(selectedFile, "image")
          }
        />

        <div className="">
          {/* Room Type */}
          <RoomType
            selectedRoomType={(selectedRoomType: any) =>
              onHandleInput(selectedRoomType, "roomType")
            }
          />
          {/* Design Type */}
          <DesignType
            selectedDesignType={(selectedDesignType: any) =>
              onHandleInput(selectedDesignType, "designType")
            }
          />
          {/* Addition Requirements */}
          <TextArea
            additionalRequirements={(value: any) =>
              onHandleInput(value, "additionalRequirements")
            }
          />

          <Button className="w-full mt-5">Generate </Button>
          <p className="text-gray-400 text-sm mb-52 py-1">
            NOTE: 1 credits will be deducted from your account for every design.
          </p>
        </div>
      </div>
    </div>
  );
}
