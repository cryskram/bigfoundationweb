import Image from "next/image";
import React from "react";
import { FaLocationDot, FaRegCopyright } from "react-icons/fa6";
import { MdEmail, MdPerson } from "react-icons/md";

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-slate-200 px-4 py-8 text-gray-600 flex flex-col items-center w-full"
    >
      <div className="flex flex-col lg:flex-row w-full justify-evenly items-center">
        <div className="flex flex-col items-center">
          <Image src="/logo.png" width={400} height={400} alt="logo" />
          <h1 className="font-semibold text-lg mt-2">
            An Intitiative by BMSCE
          </h1>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-0 justify-start gap-10">
          <div className="flex flex-col  space-y-4">
            <h1 className="text-black font-semibold text-xl">
              Contact Information
            </h1>
            <div className="flex gap-3 items-start">
              <FaLocationDot className="text-mGreen" size={20} />
              <p className="font-medium">
                BIG FOUNDATION
                <br />
                BMS College of Engineering
                <br />
                Bull Temple Road, Basavanagudi
                <br />
                Bangalore- 560019
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <MdEmail className="text-mGreen" size={20} />
              <p className="font-medium">bmsbigfoundation@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col  space-y-4">
            <h1 className="text-black font-semibold text-xl">Chief Convener</h1>
            <div className="flex gap-3 items-start">
              <MdPerson className="text-mGreen" size={20} />
              <p className="font-medium">Dr. H. N. Suma</p>
            </div>
            <div className="flex gap-3 items-start">
              <MdEmail className="text-mGreen" size={20} />
              <p className="font-medium">hns.ml@bmsce.ac.in</p>
            </div>
          </div>
          <div className="flex flex-col  space-y-4">
            <h1 className="text-black font-semibold text-xl">
              Management Lead
            </h1>
            <div className="flex gap-3 items-start">
              <MdPerson className="text-mGreen" size={20} />
              <p className="font-medium">Chirag Pradhan</p>
            </div>
            <div className="flex gap-3 items-start">
              <MdEmail className="text-mGreen" size={20} />
              <p className="font-medium">chirag.ec21@bmsce.ac.in</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="inline-flex gap-3 font-semibold items-center mt-20">
        <FaRegCopyright /> 2024 BIG FOUNDATION All Rights Reserved
      </h1>
    </div>
  );
};

export default Footer;
