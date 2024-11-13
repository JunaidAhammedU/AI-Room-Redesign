"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function ImageSelection({
  selectedFile,
}: {
  selectedFile: any | null;
}) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] as File;
    if (file) {
      selectedFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-4">
      <label htmlFor="image" className="text-gray-500">
        {" "}
        Select Image Of Your Room*
      </label>
      <div className="mt-2">
        <label htmlFor="upload-image">
          <div
            className={`p-8 sm:p-10 md:p-12 lg:p-16 border-2 rounded-xl border-dotted flex justify-center items-center cursor-pointer hover:shadow-lg bg-slate-50 ${
              imageUrl && "p-0 shadow-none bg-white"
            }`}
          >
            {!imageUrl ? (
              <Image src={"/upload.png"} width={70} height={70} alt="upload" />
            ) : (
              <Image
                src={imageUrl}
                width={0}
                height={0}
                alt="Selected Room Image"
                className="object-contain w-full h-auto max-w-[300px] max-h-[300px] rounded-xl"
              />
            )}
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
