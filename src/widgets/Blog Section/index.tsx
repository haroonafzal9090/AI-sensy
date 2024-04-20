import Image from "next/image";
import React from "react";
import { blogSectionData, blogSectionInterface } from "@/assests/data/blog_section_data";

function BlogSection() {
  return (
    <div className="container mt-4">
      <div className="text-center">
        <h2 className="font-bold text-5xl ">Latest blog posts</h2>
      </div>
      {/* Grid container */}
      <div className="mt-16">
        {/* Grid item */}
        <div className="grid lg:grid-cols-4 md2:grid-cols-3 sm2:grid-cols-2 grid-cols-1 gap-4 ">
          {/* Image */}
          {blogSectionData.map((item: any, index: number) => (
            <div key={item.id} className="flex flex-col items-center border rounded-lg pb-6 transition-opacity duration-200 ease-in-out hover:opacity-50 cursor-pointer">
              { item.imageSrc &&
              <div className="w-full h-[130px] relative ">
                <Image
                  src={item.imageSrc} // Corrected type
                  alt={item.altText}
                  className=" object-cover h-[130px] rounded-t-lg object-top"
                />
              </div>
}
              <p className="px-5 mt-4  font-bold text-[15.5px] leading-snug text-[#303030] ">{item.heading}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
