import Cssgrid from "@/components/Cssgrid";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center md:pt-[20px]">
      <div className="max-w-7xl mx-auto rounded-md] ">
        <Cssgrid />
      </div>
      <Link href={"/"}>
        <div className="workLogo w-[98px] h-[30px] text-center bg-transparent rounded-md border-2 border-gray-400 hidden md:block absolute top-4 right-10">
          <span className="text-white text-[12px]">Back</span>
        </div>
      </Link>
    </div>
  );
};

export default page;
