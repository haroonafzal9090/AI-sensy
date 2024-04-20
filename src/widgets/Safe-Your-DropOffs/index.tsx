import Image from "next/image";
import React from "react";
import safe_your_drop_offs from "@/assests/images/safe-drops-off.png";

function SafeYourDropOffs() {
  return (
    <div className="container mt-36 flex gap-x-14 mb-10 max-md2:flex-col-reverse max-md2:gap-y-16 items-center mx-auto xl:pl-10" >
      {/* Right SIde */}
      <div className="md2:w-1/2 w-full">
        <Image src={safe_your_drop_offs} alt="image" height={700} width={700} />
      </div>

      {/* Left SIde */}
      <div className="md2:w-1/2  mt-20 flex flex-col gap-y-6 max-md2:text-center">
        <h2 className="sm2:text-3xl text-2xl font-bold">Safe Your Drop Offs</h2>
        <p className="max-w-[360px]">
          Recover Abandoned Carts, Application Drop-offs within minutes using
          Whatsapp Smart Notifications.
        </p>
        <p className="max-w-[360px]">
          These Notifications have special CTA(Call-to-Action) Buttons that
          drive Engagement
        </p>
        <div className="mt-5 max-sm2:w-full">
          <button className="text-[#03cf65] border rounded border-b-2 border-solid border-[#03cf65] px-4 py-3 shadow-lg hover:shadow-xl text-sm font-bold whitespace-nowrap transition-all duration-300   transform hover:-translate-y-0.5">
            Start for FREE
          </button>
        </div>
      </div>
    </div>
  );
}

export default SafeYourDropOffs;
