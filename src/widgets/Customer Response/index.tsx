import React from "react";

function Customer_Response() {
  // Array of video URLs
  const videoUrls = [
    "https://www.youtube.com/embed/2nEys8Gaa4A?rel=0?rel=0&enablejsapi=1&origin=https://m.aisensy.com",
    "https://www.youtube.com/embed/2nEys8Gaa4A?rel=0?rel=0&enablejsapi=1&origin=https://m.aisensy.com",
    "https://www.youtube.com/embed/2nEys8Gaa4A?rel=0?rel=0&enablejsapi=1&origin=https://m.aisensy.com",
    "https://www.youtube.com/embed/2nEys8Gaa4A?rel=0?rel=0&enablejsapi=1&origin=https://m.aisensy.com",
  ];

  return (
    <div className="container mt-24 mb-10">
      {/* Heading */}
      <div className="text-center flex justify-center">
        <h2 className="sm2:text-5xl text-4xl font-bold text-[#3d3d3d] max-w-[850px] !leading-snug mb-16">Let's hear it from our Successful Customers!</h2>
      </div>
      {/* Video Section */}
      <div className="grid xl1:grid-cols-2 grid-cols-1 items-center mx-auto gap-y-14 max-xl:gap-x-8 justify-center mt-5  w-full">
        {videoUrls.map((url, index) => (
        <div className="w-full flex justify-center items-center" key={index}>
          <iframe className="xl1:w-[510px] xl1:h-[310px] sm1:w-[500px] sm1:h-[300px] w-[300px] h-[200px] " key={index} src={url} ></iframe>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Customer_Response;
