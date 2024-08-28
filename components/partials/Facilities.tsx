import React from "react";
import { AiFillSignature } from "react-icons/ai";
import { FaShareNodes } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { IoDocuments } from "react-icons/io5";
import {
  MdPrecisionManufacturing,
  MdScience,
  MdTransform,
} from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbLicense } from "react-icons/tb";

const data = {
  facility: [
    {
      icon: <AiFillSignature className="mx-auto text-yellow-500" size={60} />,
      title: "Grant Office",
      description: "Guidance offered to draft proposals for government grants",
    },
    {
      icon: <GiReceiveMoney className="mx-auto text-green-500" size={60} />,
      title: "Financial Aid",
      description:
        "Aid assistance offered for the development of Proof of Concept",
    },
    {
      icon: <IoDocuments className="mx-auto" size={60} />,
      title: "Legal Support",
      description:
        "We help with filing Patents, Technology transfer and Agreements/ MoUs",
    },
    {
      icon: (
        <RiCustomerService2Fill className="mx-auto text-red-500" size={60} />
      ),
      title: "Consulting Services",
      description:
        "Networking support and consulting services from our advisors and mentors with diverse experience",
    },
    {
      icon: <MdScience className="mx-auto text-blue-500" size={60} />,
      title: "Lab & Research Equipment",
      description:
        "Access provided to equipment available in the institute without affecting regular academic activity",
    },
    {
      icon: <MdTransform className="mx-auto text-emerald-600" size={60} />,
      title: "Translation and Transformation",
      description:
        "We provide you a platform to translate your ideas to prototypes and transform them into viable products, along with low volume manufacturing support",
    },
    {
      icon: <TbLicense className="mx-auto text-orange-500" size={60} />,
      title: "Licensed Software",
      description:
        "Guidance offered towards the usage of Design and Simulation Software",
    },
    {
      icon: (
        <MdPrecisionManufacturing
          className="mx-auto text-yellow-800"
          size={60}
        />
      ),
      title: "Manufacturing Equipment & Machinery",
      description:
        "Access provided to the utilization of 3D Printers, PCB/ Metal Fabrication, CNC, Plastic Molding, etc.",
    },
    {
      icon: <FaShareNodes className="mx-auto text-violet-500" size={60} />,
      title: "Marketing",
      description:
        "We offer assistance in digital/ B2B marketing while scaling up to increase and improve reach towards multiple market segments",
    },
  ],
};

const Facilities = () => {
  return (
    <div className="py-16 px-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">WHAT WE DO</h1>
      <p>Learn more about our facilities</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-lg mt-10">
        {data.facility.map((s, idx) => (
          <div
            className="bg-white shadow-xl rounded-2xl px-8 py-6 hover:shadow-2xl transition duration-200 hover:scale-105"
            key={idx}
          >
            {s.icon}
            <h1 className="mt-6 text-center font-bold text-xl">{s.title}</h1>
            <p className="font-medium mt-2 text-gray-600">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
