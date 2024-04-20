import React from "react";

function Power_Pack_Demo() {
  return (
    <div className="container mt-32 mb-10">
      {/* Heading And Paragraph */}
      <div className="text-center flex flex-col justify-center items-center ">
        <h1 className="text-3xl font-bold max-w-[400px] text-[#303030] !leading-snug">
          Let&apos;s take you through a Power Packed Demo
        </h1>
        <p className="mt-4 mb-10 max-w-[410px]">
          See How AiSensy platform can help your business grow 3X in this
          Product Walkthrough Video!
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <iframe
          className="w-[880px] h-[550px]"
          src="https://www.youtube.com/embed/fcz4PDYCpoI?rel=0?rel=0&enablejsapi=1&origin=https://m.aisensy.com"
          title="YouTube video player"
          />
      </div>
    </div>
  );
}

export default Power_Pack_Demo;
