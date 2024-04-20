import Image from "next/image";
import React from "react";
import physics_wallah_img from "@/assests/images/physicswallah.png";
import cosco_image from "@/assests/images/cosco.png";

function ProductAndSupport() {
  return (
    <div className="container mt-24 mb-10">
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="sm2:text-3xl text-2xl font-bold max-w-[380px] !leading-snug ">
          Onboarding, Product & Support
        </h1>
        <p className="mt-6 mb-12">We Excel at all of it!</p>
      </div>
      {/* Main Div */}
      <div className="flex max-xl1:flex-col gap-x-8 max-xl1:gap-y-8  max-xl1:mx-auto max-xl1:justify-center max-xl1:items-center  ">
        {/* 1st div  */}
        <div className="shadow-xl rounded-xl p-10 flex-1 ">
          {/* img */}
          <div className="mb-4">
            <Image
              src={physics_wallah_img}
              alt="physics wallah"
              width={180}
              height={180}
            />
          </div>
          {/* text */}
          <div className="flex flex-col gap-y-3">
            <p className="max-w-[440px]">
              AiSensy team has shown exceptional professionalism, reliability
              and a true commitment to customer satisfaction
            </p>
            <h2 className="font-bold xl1:text-2xl text-xl ">Priya Otswal,</h2>
            <h2 className="font-bold xl1:text-2xl text-xl xl1:max-w-[310px]">
              Sr Marketing Manager - PhysicsWallah
            </h2>
          </div>
        </div>
        {/* 2nd div */}
        <div className="shadow-xl rounded-xl p-10 flex-1 mb-5">
          {/* img */}
          <div className="mb-4">
            <Image
              src={cosco_image}
              alt="cosco image"
              width={80}
              height={80}
            />
          </div>
          {/* text */}
          <div className="flex flex-col gap-y-3">
            <p className="xl1:max-w-[440px] max-w-[485px]">
            AiSensy helped us increase our customer engagement. Our customer engagement increased from 35% to 90% with AiSensy&apos;s Smart Retargeting feature.
            </p>
            <h2 className="font-bold xl1:text-2xl text-xl">Akaash Jain,</h2>
            <h2 className="font-bold xl1:text-2xl text-xl">
            Business Executive - Cosco, India
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAndSupport;
