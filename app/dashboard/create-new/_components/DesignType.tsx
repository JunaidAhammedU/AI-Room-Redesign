import Image from "next/image";
import React, { useState } from "react";

export default function DesignType({ selectedDesignType }: any) {
  const Design = [
    {
      name: "Modern",
      image: "/Modern.jpeg",
    },
    {
      name: "Minimal",
      image: "/Minimal.jpg",
    },
    {
      name: "Contemporary",
      image: "/Contemporary.jpeg",
    },
    {
      name: "Rustic",
      image: "/Rustic.jpeg",
    },
    {
      name: "Bohemian",
      image: "/Bohemian.jpeg",
    },
    {
      name: "Industrial",
      image: "/Industrial.jpeg",
    },
  ];

  const [selectedDesign, setSelectedDesign] = useState<any>(Design[0]);
  return (
    <div className="mt-5">
      <label htmlFor="Room interior type" className="text-gray-500">
        Select Room interior type*
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
        {Design.map((design, i) => (
          <div
            key={i}
            onClick={() => {
              setSelectedDesign(design.name), selectedDesignType(design.name);
            }}
          >
            <div className="flex gap-4 items-center justify-center my-2">
              <Image
                src={design.image}
                width={120}
                height={120}
                alt="design"
                className={`${
                  selectedDesign === design.name
                    ? "border-2  border-black rounded-lg h-[70px]"
                    : "rounded-lg h-[70px] hover:scale-105 cursor-pointer transition-all"
                }`}
              />
            </div>
            <h1 className="text-center text-sm">{design.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
