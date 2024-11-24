"use client";

import React, { useContext, useState } from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import TextArea from "./_components/TextArea";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/config/firebase";
import { useUser } from "@clerk/nextjs";
import CustomLoading from "./_components/CustomLoading";
import AIOutputDialoge from "../_components/AIOutputDialoge";
import { UserDetailContext } from "@/app/_context/userDetailContext";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import formValidationSchema from "@/lib/validationSchema";
import { PiMagicWandDuotone } from "react-icons/pi";

export default function CreateNew() {
  const { user } = useUser();
  const { toast } = useToast();
  const context = useContext(UserDetailContext);
  if (!context) return null;
  const { userDetails, setUserDetails } = context;

  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [aiOutputImg, setAiOutputImg] = useState<any>({});
  const [orgImage, setOrgImage] = useState<any>();
  const [openOutputDialog, setOpenOutputDialog] = useState(false);
  const [ifError, setIfError] = useState({
    roomType: false,
    designType: false,
    additionalRequirements: false,
    image: false,
  });
  const onHandleInput = (value: any, fieldName: string) => {
    setFormData((prev: any) => ({ ...prev, [fieldName]: value }));
  };

  const validateForm = () => {
    const { error } = formValidationSchema.validate(formData, {
      abortEarly: false,
    });
    console.log(error);
    if (error) {
      const errorMessages = error.details.map((err: any) => err.message);
      errorMessages.forEach((msg: any) =>
        toast({
          title: "Missing Field",
          description: <span style={{ color: "red" }}>{msg}</span>,
        })
      );
      return false;
    }
    return true;
  };

  const GenerateAIImage = async () => {
    if (userDetails?.credits > 0) {
      if (!validateForm()) return;
      setLoading(true);
      const rawImageUrl = await saveRawImagetoFirebase();
      const resut = await axios.post("/api/redesign-room", {
        imageUrl: rawImageUrl,
        roomType: formData?.roomType,
        designType: formData?.designType,
        description: formData?.additionalRequirements,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      });
      await updateUserCredits();
      setAiOutputImg(resut.data.result);
      setOpenOutputDialog(true);
      setLoading(false);
    } else {
      toast({
        title: "Uh oh! You lose credits",
        description:
          "You don't have enough credits to generate an image. Please buy credits to generate an image.",
        action: (
          <ToastAction
            altText="Buy credits"
            onClick={() => (window.location.href = "/dashboard/buy-credits")}
            className="text-white bg-gray-800 text-sm rounded-sm p-2 hover:bg-gray-950 font-bold hover:translate duration-300"
          >
            Buy
          </ToastAction>
        ),
      });
    }
  };

  const saveRawImagetoFirebase = async () => {
    const fileName = Date.now() + "_raw.png";
    const imageRef = ref(storage, `room-redesign/` + fileName);

    await uploadBytes(imageRef, formData.image).then((snapshot) => {
      console.log("File uploaded successfully!");
    });

    const downloadUrl = await getDownloadURL(imageRef);
    setOrgImage(downloadUrl);
    return downloadUrl;
  };

  const updateUserCredits = async () => {
    const resut = await axios.post("/api/update-credits", {
      userEmail: user?.primaryEmailAddress?.emailAddress,
      currentCredits: userDetails?.credits,
    });

    if (resut.data.status) {
      setUserDetails((prev: any) => ({
        ...prev,
        credits: userDetails?.credits - 1,
      }));
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-center">
        Get ready to experience the magic of interior design with Artifex AI
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
          {/* Additional Requirements */}
          <TextArea
            additionalRequirements={(value: any) =>
              onHandleInput(value, "additionalRequirements")
            }
          />

          <Button className="w-full mt-5" onClick={GenerateAIImage}>
            Generate <PiMagicWandDuotone className="text-2xl text-purple-400" />
          </Button>
          <p className="text-gray-400 text-sm mb-52 py-1">
            NOTE: 1 credits will be deducted from your account for every design.
          </p>
        </div>
      </div>
      <CustomLoading loading={loading} />
      <AIOutputDialoge
        openOutputDialog={openOutputDialog}
        closeOutputDialog={() => setOpenOutputDialog(false)}
        orgImage={orgImage}
        aiImageUrl={aiOutputImg}
      />
    </div>
  );
}
