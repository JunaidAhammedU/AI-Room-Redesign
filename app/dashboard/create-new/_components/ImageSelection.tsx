'use client';

import Image from "next/image";
import React, { useState } from "react";

export default function ImageSelection({ selectedFile }: { selectedFile: any | null; }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] as File;
    if (file) {
      selectedFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <label htmlFor="image" className="text-gray-500"> Select Image Of Your Room*</label>
      <div className="mt-2">
        <label htmlFor="upload-image">
          <div
            className={`p-28 border-2 rounded-xl border-dotted flex justify-center cursor-pointer hover:shadow-lg bg-slate-50 ${imageUrl && "p-0 shadow-none bg-white"} `}
          >
            {!imageUrl ?(
                <Image src={"/upload.png"} width={70} height={70} alt="upload" />
            ) : (
                <Image
                src={imageUrl}
                width={300}
                height={300}
                alt="Selected Room Image"
                className="object-cover h-[300px] w-[300px] rounded-xl"
              />
            ) }
          </div>
        </label>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="upload-image"
          onChange={onFileChange}
        />
      </div>
    </div>
  );
}
