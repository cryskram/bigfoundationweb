import React from "react";
import { IoRocketSharp } from "react-icons/io5";

const Divider = () => {
  return (
    <div className="flex items-center justify-center py-10 w-full text-mGreen">
      <div className="border-[1px] w-1/6 md:w-[10%] border-mGreen border-dashed"></div>
      <IoRocketSharp className="mx-2" size={30} />
      <div className="border-[1px] w-1/6 md:w-[10%] border-mGreen border-dashed"></div>
    </div>
  );
};

export default Divider;
