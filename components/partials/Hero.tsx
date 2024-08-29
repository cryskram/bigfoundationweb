import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-hero bg-cover w-full h-screen relative">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-50 grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-center p-6">
        <Image
          className="w-3/4 md:w-1/2 mx-auto"
          src="/logonotext.png"
          width={600}
          height={600}
          alt="illustration"
        />
        <div className="text-white mr-auto">
          <h1 className="font-bold text-2xl md:text-5xl text-mGreen">
            B M SREENIVASAIAH INNOVATORS GUILD FOUNDATION
          </h1>
          <p className="text-xl md:text-2xl text-wrap font-medium mt-2">
            Incubating Ideas, Mothering Success
          </p>
          <p className="mt-6 font-semibold text-xl md:text-3xl">
            Your Successful Entrepreneurial Journey Begins Here
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4">
            <Link
              className="bg-gradient-to-r from-[#3776d3] to-mGreen px-4 py-2 text-lg md:text-xl rounded-lg font-medium"
              href="/register"
            >
              Get Involved
            </Link>
            <Link
              className="flex items-center gap-2 border-2 border-mGreen px-4 py-2 rounded-lg font-medium hover:bg-mGreen transition duration-300 text-base md:text-xl"
              href="/"
            >
              <FaPlay /> Watch Video
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
