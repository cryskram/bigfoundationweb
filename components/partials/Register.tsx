import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const data = [
  "Have a groundbreaking idea? Register with us, and we'll help you transform it into a reality. Become an Innovator.",
  "Ready to take your startup to the next level? Take that leap with us. Become an Incubatee.",
  "Passionate about mentoring? We're always seeking mentors who can inspire and guide our Innovators and Incubatees.",
];

const Register = () => {
  return (
    <div className="py-16 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <Image
          className="w-3/4 lg:w-1/3"
          src="/feature3.png"
          width={600}
          height={600}
          alt="register image"
        />
        <div className="w-full mt-10 lg:mt-0 lg:w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-semibold text-start">
            What are you waiting for?
          </h1>
          <p className="text-gray-500 text-start font-semibold text-base md:text-lg mt-2">
            Turn your vision into reality by joining us today!
          </p>
          <div className="mt-4 w-full lg:w-3/4 mx-auto px-5">
            {data.map((s, idx) => (
              <ul
                key={idx}
                className="list-image-[url(/check.png)] list-outsied text-gray-500 font-medium"
              >
                <li>{s}</li>
              </ul>
            ))}
          </div>
          <Link
            className="bg-gradient-to-r from-[#3776d3] to-mGreen px-6 py-4 text-xl rounded-lg text-white font-medium mt-10 inline-flex items-center gap-3"
            href="/register"
          >
            Get Involved <FaLongArrowAltRight size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
