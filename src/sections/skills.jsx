import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <BiLogoMongodb /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "APIs" },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400">Skills</h2>
        <p className="mt-2 text-sm sm:text-base text-gray-400">
          Tools and technologies I use regularly.
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3 md:gap-4 justify-center md:justify-start">
          {skills.map((s) => (
            <span
              key={s.name}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-800 border border-gray-700 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 transform hover:scale-105 transition text-xs sm:text-sm md:text-base"
            >
              {s.icon ? <span className="text-base sm:text-lg">{s.icon}</span> : null}
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
