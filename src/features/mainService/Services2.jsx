import { FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { IoMdBrush } from "react-icons/io";
import { SiFigma, SiNextdotjs } from "react-icons/si";
import TechStackCard from "./components/TechStackCard";

const Services2 = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We build fast, responsive, and scalable websites tailored to your business needs.",
      icon: <FaLaptopCode className="h-16 w-16 text-blue-500 drop-shadow-lg" />,
      border: "border-t-4 border-blue-600",
    },
    {
      title: "Mobile App Development",
      description:
        "We create intuitive and high-performance mobile applications for iOS and Android.",
      icon: <FaMobileAlt className="h-16 w-16 text-green-500 drop-shadow-lg" />,
      border: "border-t-4 border-green-600",
    },
    {
      title: "UI/UX Design",
      description:
        "We design modern, user-friendly interfaces that provide a seamless experience.",
      icon: <IoMdBrush className="h-16 w-16 text-purple-500 drop-shadow-lg" />,
      border: "border-t-4 border-purple-600",
    },
    {
      title: "Prototyping & Design Systems",
      description:
        "We build design systems and prototypes that make your vision tangible and clear.",
      icon: <SiFigma className="h-16 w-16 text-pink-500 drop-shadow-lg" />,
      border: "border-t-4 border-pink-600",
    },
    {
      title: "Full-Stack Solutions",
      description:
        "From frontend to backend, we deliver complete solutions that are robust and maintainable.",
      icon: <SiNextdotjs className="h-16 w-16 text-gray-700 drop-shadow-lg" />,
      border: "border-t-4 border-gray-700",
    },
    {
      title: "Responsive & Adaptive Design",
      description:
        "We ensure your website or app looks perfect on every device and screen size.",
      icon: <IoMdBrush className="h-16 w-16 text-rose-500 drop-shadow-lg" />,
      border: "border-t-4 border-rose-500",
    },
  ];

  return (
    <main id="services" className="flex flex-col items-center px-6 py-16 bg-gray-50">
      {/* Header */}
      <section className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Services
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-700">
          We deliver modern, scalable, and beautiful digital solutions that
          elevate your brand and engage your audience.
        </p>
      </section>

      {/* Services Grid */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className={`flex items-center gap-5 p-6 rounded-xl bg-white shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-transform cursor-pointer ${service.border}`}
          >
            <div className="flex justify-center items-center w-20 h-20">
              {service.icon}
            </div>
            <TechStackCard
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Services2;
