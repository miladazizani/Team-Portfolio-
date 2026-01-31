import React from "react";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, image, tech, link }) => {
  return (
    <div className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-2xl"
      />

      {/* Overlay sliding from bottom */}
      <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-black bg-opacity-80 text-white flex flex-col justify-end p-4 transition-all duration-500">
        <h3 className="text-lg md:text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm md:text-base opacity-90 mb-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-blue-600 text-white rounded-full text-xs"
            >
              {t}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 bg-white text-blue-600 rounded-full text-xs md:text-sm font-semibold hover:bg-blue-50 transition"
          >
            <FiExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Admin Dashboard",
      description:
        "Responsive UI, analytics, and advanced features.",
      image: "/images/dashboard.png",
      tech: ["React", "Tailwind", "Zustand"],
      link: "#",
    },
    {
      title: "Gym Management App",
      description:
        "Manage members, trainers, payments, and reports.",
      image: "/images/gym.png",
      tech: ["React", "Tailwind", "LocalStorage"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Showcase projects with modern UI & animations.",
      image: "/images/portofolio.png",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description:
        "Online store with cart, payments, and dashboard.",
      image: "/images/ecomerce.png",
      tech: ["Next.js", "React", "Tailwind"],
      link: "#",
    },
    {
      title: "Musicify",
      description:
        "Stream music, create playlists, sleek music player interface.",
      image: "/images/musicify.png",
      tech: ["React", "Tailwind", "Context API"],
      link: "#",
    },
    {
      title: "Chat App",
      description:
        "Real-time messaging app with smooth UI and responsive design.",
      image: "/images/chatify.png",
      tech: ["React", "Socket.io", "Tailwind"],
      link: "#",
    },
  ];

  return (
    <main id="project" className="min-h-screen px-6 md:px-12 py-16 bg-gray-50">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Projects</h1>
        <p className="text-lg md:text-xl text-gray-700">
          Check out some of our featured projects. Hover each card to see more details.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
};

export default Projects;
