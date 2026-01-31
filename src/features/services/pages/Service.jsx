import { FaReact } from "react-icons/fa6";
import { DiJavascript, DiResponsive, DiHtml5, DiCss3 } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs, SiReact } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import TechStackCard from "../components/TechStackCard";

const Service = () => {
  const techs = [
    {
      title: "HTML",
      description: "The backbone of every web page, structuring content cleanly.",
      icon: <DiHtml5 className="h-16 w-16 text-orange-500 drop-shadow-lg" />,
      border: "border-t-4 border-orange-500",
    },
    {
      title: "CSS",
      description: "Styles and beautifies web pages, turning them into polished experiences.",
      icon: <DiCss3 className="h-16 w-16 text-blue-500 drop-shadow-lg" />,
      border: "border-t-4 border-blue-500",
    },
    {
      title: "JavaScript",
      description: "JS turns static websites into dynamic adventures with interactivity.",
      icon: <DiJavascript className="h-16 w-16 text-yellow-500 drop-shadow-lg" />,
      border: "border-t-4 border-yellow-500",
    },
    {
      title: "React",
      description: "Build fast, interactive UIs making web pages feel magical.",
      icon: <FaReact className="h-16 w-16 text-blue-500 drop-shadow-lg" />,
      border: "border-t-4 border-blue-600",
    },
    {
      title: "Tailwind CSS",
      description: "Rapidly create beautiful, responsive, and modern designs.",
      icon: <SiTailwindcss className="h-16 w-16 text-cyan-500 drop-shadow-lg" />,
      border: "border-t-4 border-cyan-500",
    },
    {
      title: "Node.js",
      description: "Run JavaScript on the server and build fast backend services.",
      icon: <SiNextdotjs className="h-16 w-16 text-green-600 drop-shadow-lg" />,
      border: "border-t-4 border-green-600",
    },
    {
      title: "Figma",
      description: "Design, prototype, and collaborate visually with your team.",
      icon: <IoLogoFigma className="h-16 w-16 text-purple-600 drop-shadow-lg" />,
      border: "border-t-4 border-purple-600",
    },
    {
      title: "React Native",
      description: "Build beautiful, fast mobile apps for iOS and Android using React.",
      icon: <SiReact className="h-16 w-16 text-teal-500 drop-shadow-lg" />,
      border: "border-t-4 border-teal-500",
    },
    {
      title: "Responsive Design",
      description: "One site, all screens — no pinch-zoom, no headaches.",
      icon: <DiResponsive className="h-16 w-16 text-rose-600 drop-shadow-lg" />,
      border: "border-t-4 border-rose-600",
    },
  ];

  return (
    <main id="service" className="flex flex-col items-center px-6 py-16 bg-gray-50">
      {/* Header */}
      <section className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          How We Can Help You?
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-700">
          We build modern, fast, and scalable user interfaces that deliver a smooth and professional experience for users.
        </p>
      </section>

      {/* Tech Grid */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {techs.map((tech) => (
          <div
            key={tech.title}
            className={`flex items-center gap-5 p-6 rounded-xl bg-cyan-50 shadow-lg hover:-translate-y-2 transition-transform cursor-pointer ${tech.border}`}
          >
            <div className="flex justify-center items-center w-20 h-20">
              {tech.icon}
            </div>
            <TechStackCard title={tech.title} description={tech.description} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Service;
