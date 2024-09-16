import Image from "next/image";
import React from "react";
import { FaAward, FaBookOpen, FaBrain, FaBriefcase } from "react-icons/fa6";

const data = {
  directors: [
    {
      image: "/aboutus/ragini.png",
      name: "Dr. B. S. Ragini Narayan",
      designation: "Donor Trustee And Member Secretary, BMSET",
      position: "Patron",
    },
    {
      image: "/aboutus/dayanandapai.png",
      name: "Dr. P. Dayanand Pai",
      designation: "Chairman, BMSCE and Trustee, BMSET",
      position: "Patron",
    },
    {
      image: "/aboutus/bheemsha.jpeg",
      name: "Dr. Bheemsha Arya",
      designation: "Principal, BMSCE",
      position: "Patron",
    },
    {
      image: "/aboutus/hnsuma.png",
      name: "Dr. H. N. Suma",
      designation: "Dean Innovation, BMSCE",
      position: "Chief Convener",
    },
    {
      image: "/aboutus/abhishekappaji.png",
      name: "Dr. Abhishek M. Appaji",
      designation: "Research and Development Head, BMSCE",
      position: "Technical Lead",
    },
  ],
  advisors: [
    {
      image: "/aboutus/hsshankar.png",
      name: "Col. H. S. Shankar",
      desc: "Army Veteran, Chairman & MD of Alpha Design Technologies Private Ltd.",
    },
    {
      image: "/aboutus/purnaprasad.png",
      name: "Dr. Purna Prasad",
      desc: "Chief Technology Officer, Northwell Health Adjunct Professor, Hofstra University",
    },
    {
      image: "/aboutus/balakrishna.png",
      name: "Dr. Balakrishna Haridas",
      desc: "Professor of Practice and Director, Department of Biomedical Engineering, Texas A&M University",
    },
    {
      image: "/aboutus/rajraghavendrarao.png",
      name: "Dr. Rajraghavendra Rao",
      desc: "Professor and Department Head in Biomedical Engineering, University of Arkansas",
    },
  ],
  mentors: [
    {
      image: "/aboutus/shyam.png",
      name: "Dr. Shyam Vasudeva Rao",
      desc: "Founder and Director Forus Health, Renalyx and Rx DHP",
    },
    {
      image: "/aboutus/vijayarajan.png",
      name: "Dr A. Vijayarajan",
      desc: "Founder and CTO, InnAccel Technologies Pvt Ltd",
    },
    {
      image: "/aboutus/srinivas.png",
      name: "Srinivas Jamkhandi",
      desc: "Project Scientist, MSME Centre of Excellence at IISc",
    },
    {
      image: "/aboutus/raviramaswami.png",
      name: "Ravi Ramaswamy",
      desc: "Chief Executive Officer, RV Consultants, Bangalore",
    },
  ],

  objectives: [
    {
      icon: <FaBrain className="text-green-400" size={60} />,
      desc: "Be the platform for innovation, incubation, research, consultancy and entrepreneurship and Enable overseas collaboration to help both students and faculty upskill.",
    },
    {
      icon: <FaBookOpen className="text-red-400" size={60} />,
      desc: "To generate alternative revenues for the group of institutions through public-private partnerships, industry collaboration, auxiliary services, social media promotions.",
    },
    {
      icon: <FaBriefcase className="text-orange-900" size={60} />,
      desc: "To promote “Work Integrated Learning Programs” across disciplines in order to fortify the culture of work-life balance amongst students..",
    },
    {
      icon: <FaAward className="text-yellow-500" size={60} />,
      desc: "To recognize, award, reward & invest outstanding/promising start-ups and enablers of start-up ecosystem who can be economic engines of tomorrow.",
    },
  ],
};

const AboutUs = () => {
  return (
    <div className="px-4 py-20">
      {/* Main */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-screen-lg mx-auto">
        <Image
          src="/illustration1.png"
          width={1000}
          height={1000}
          alt="about illustration"
        />
        <div className="my-auto">
          <div>
            <h1 className="text-2xl md:text-4xl text-mGreen font-bold">
              Our Vision
            </h1>
            <p className="font-medium text-gray-600">
              Create products ,technologies or processes to address societal
              needs.
            </p>
          </div>
          <div className="mt-4">
            <h1 className="text-2xl md:text-4xl text-mGreen font-bold">
              Our Mission
            </h1>
            <p className="font-medium text-gray-600">
              Encourage entrepreneurship by supporting innovation and
              transferring technology for commercial use through diverse
              approaches.
            </p>
          </div>
        </div>
      </div>

      {/* Objectives */}
      <div className="py-20 flex flex-col items-center justify-center bg-gradient-to-b">
        <h1 className="font-bold text-2xl md:text-4xl">Our Objectives</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mt-6">
          {data.objectives.map((o, idx) => (
            <div
              className="bg-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col items-center"
              key={idx}
            >
              {o.icon}
              <p className="mt-4 font-medium text-gray-600">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Members */}
      <div className="py-20 flex flex-col items-center justify-center">
        <h1 className="text-xl text-mGreen font-bold">OUR BEST</h1>
        <h1 className="text-2xl md:text-4xl font-bold">Dedicated Team</h1>

        {/* Home team */}
        <h1 className="mt-20 text-3xl font-bold">Home Team</h1>
        <div className="flex flex-wrap items-start justify-center gap-20 mt-6">
          {data.directors.map((d, idx) => (
            <div
              className="flex flex-col items-center max-w-64 text-center"
              key={idx}
            >
              <Image
                className="rounded-full"
                src={d.image}
                width={200}
                height={200}
                alt={d.name}
              />
              <h1 className="text-xl font-semibold mt-4">{d.name}</h1>
              <p className="text-base mt-1 text-gray-500 font-medium">
                {d.designation}
              </p>
              <p className="text-base text-gray-600 font-medium">
                {d.position}
              </p>
            </div>
          ))}
        </div>

        {/* Advisor team */}
        <h1 className="mt-20 text-3xl font-bold">Advisors</h1>
        <div className="flex flex-wrap items-start justify-center gap-20 mt-6">
          {data.advisors.map((d, idx) => (
            <div
              className="flex flex-col text-center items-center max-w-64"
              key={idx}
            >
              <Image
                className="rounded-full"
                src={d.image}
                width={200}
                height={200}
                alt={d.name}
              />
              <h1 className="text-xl font-semibold mt-4">{d.name}</h1>
              <p className="text-base mt-1 text-gray-600 font-medium ">
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mentors team */}
        <h1 className="mt-20 text-3xl font-bold">Mentors</h1>
        <div className="flex flex-wrap items-start justify-center gap-20 mt-6">
          {data.mentors.map((d, idx) => (
            <div
              className="flex flex-col text-center items-center max-w-64"
              key={idx}
            >
              <Image
                className="rounded-full"
                src={d.image}
                width={200}
                height={200}
                alt={d.name}
              />
              <h1 className="text-xl font-semibold mt-4">{d.name}</h1>
              <p className="text-base mt-1 text-gray-600 font-medium ">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
