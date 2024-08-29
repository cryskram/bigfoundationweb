import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <div
      id="aboutus"
      className="py-16 w-full px-4 md:px-10 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="flex flex-col gap-10 md:flex-row items-center justify-center w-full">
        <Image
          className="w-full md:w-1/2 lg:w-1/3"
          src="/process1.png"
          width={500}
          height={500}
          alt="about image"
        />
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 px-4">
          <h1 className="text-mGreen text-2xl font-bold">ABOUT US</h1>
          <h1 className="text-2xl md:text-3xl font-bold mt-2">
            We Fuel Curious Minds and Provide a Platform to Thrive
          </h1>
          <p className="text-gray-500 text-justify text-base md:text-lg mt-6">
            BIG FOUNDATION fosters innovation through rigorous research and
            collaborative efforts, leveraging domain expertise to develop
            impactful products and technologies. Here at BIG, we cultivate
            entrepreneurial spirit and support startups through tailored
            incubation facilities, consultancy services, and enhanced
            industry-institute interaction.
          </p>
          <Link
            className="bg-gradient-to-r from-[#3776d3] to-mGreen inline-flex items-center gap-2 text-white mt-4 px-6 py-4 text-lg md:text-xl rounded-lg font-medium"
            href="/about"
          >
            Know More <FaLongArrowAltRight size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
