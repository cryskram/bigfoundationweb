import { FaHandsHelping } from "react-icons/fa";
import { FaGears, FaLightbulb } from "react-icons/fa6";

const data = {
  steps: [
    {
      icon: <FaGears className="mx-auto text-blue-500" size={70} />,
      title: "Innovate",
      description:
        "Join us and ignite your passion for creating change. Sign up now to become an Innovator and turn your vision into reality.",
    },
    {
      icon: <FaLightbulb className="mx-auto text-red-500" size={70} />,
      title: "Incubate",
      description:
        "Are you a budding innovator eager to conquer the entrepreneurial world? Sign up now for unwavering support and turn your vision into success!",
    },
    {
      icon: <FaHandsHelping className="mx-auto text-yellow-500" size={70} />,
      title: "Inspire",
      description:
        "Are you an industry expert or professional eager to make a difference? Sign up as a mentor to guide and inspire young entrepreneurs on their journey to success!",
    },
  ],
};

const Walkthrough = () => {
  return (
    <div className="p-10 flex flex-col items-center bg-gradient-to-tr from-[#4b82d3] to-mGreen">
      <h1 className="text-white font-semibold font-mono text-4xl">WORKFLOW</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-lg mx-auto mt-5">
        {data.steps.map((s, idx) => (
          <div
            className="bg-white px-6 py-4 shadow-xl hover:scale-105 transition duration-200 hover:shadow-2xl rounded-2xl"
            key={idx}
          >
            <h1 className="text-3xl font-black text-gray-400">{idx + 1}</h1>
            {s.icon}
            <h1 className="mt-5 text-2xl font-bold uppercase text-center">
              {s.title}
            </h1>
            <p className="text-gray-500 text-lg font-medium">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Walkthrough;
