import Image from "next/image";
import React from "react";
import { founders_sections } from "@/assests/data/founders_sections";

function Founders_Section() {
  return (
    <div className="mt-24 container mb-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Founders & Marketers Love Us</h1>
        <p className="mt-4 mb-10">Join thousands of AiSensy Businesses Today</p>
      </div>
      {/* Image */}
      <div className="flex flex-wrap gap-y-1 gap-x-10 items-center max-w-2xl justify-center mx-auto ">
        {founders_sections.map((founder_imgaes, index) => (
          <li key={index} className="flex justify-center items-center ">
            <Image
              src={founder_imgaes.imgSrc}
              alt={founder_imgaes.altText}
              width={80}
              height={80}
              className="object-contain h-[85px] w-[85px] shrink-0"
            />
          </li>
        ))}
      </div>
    </div>
  );
}

export default Founders_Section;
