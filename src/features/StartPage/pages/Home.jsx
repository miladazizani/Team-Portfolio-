import React from "react";
import {
  FiPhoneCall,
  FiZap,
  FiLock,
  FiFeather,
} from "react-icons/fi";

function Home() {
  return (
    <main className="min-h-screen bg-stone-50 font-sans relative">

      <header className="fixed top-0 w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 md:px-10 z-50 shadow-md">
        <h1 className="text-2xl font-extrabold tracking-tight">
          Script<span className="text-blue-600">Hive</span>
        </h1>

        <nav className="hidden md:flex gap-6 font-medium text-sm bg-stone-200 rounded-full p-1">
          <a href="#home">
          <button className="px-4 py-2 rounded-full bg-stone-200 hover:bg-stone-50 hover:shadow shadow-black cursor-pointer  transition">
            Home
          </button>
          </a>
          <a href="#service">
          <button className="px-4 py-2 rounded-full cursor-pointer bg-stone-200 hover:bg-stone-50 hover:shadow shadow-black transition">
            Skills
          </button>
          </a>
          <a href="#team">
          <button className="px-4 py-2 rounded-full cursor-pointer bg-stone-200 hover:bg-stone-50 hover:shadow shadow-black transition">
            Team
          </button>
          </a>
          <a href="#services">
          <button className="px-4 py-2 rounded-full cursor-pointer bg-stone-200 hover:bg-stone-50 hover:shadow shadow-black transition">
            Services
          </button>
          </a>
          <a href="#project">
          <button className="px-4 py-2 rounded-full cursor-pointer bg-stone-200 hover:bg-stone-50 hover:shadow shadow-black transition">
            Projects
          </button>
          </a>
          <a href="#blog">
          <button className="px-4 py-2 rounded-full cursor-pointer bg-stone-200 hover:bg-stone-50 hover:shadow shadow-black transition">
            Blogs
          </button>
          </a>
          <a href="#contact">
          <button className="px-4 py-2 rounded-full cursor-pointer bg-stone-200 hover:bg-stone-50 hover:shadow shadow-black transition">
            Contact
          </button>
          </a>
        </nav>
        <a href="#contact">
        <button className="flex items-center gap-2 px-5 py-2 cursor-pointer rounded-full bg-stone-50 hover:bg-stone-200 shadow shadow-black transition font-semibold">
          <FiPhoneCall className="w-5 h-5" />
          Contact
        </button>
        </a>
      </header>


      <div className="h-16"></div>

      <section id="home" className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 md:px-12">

        <h1 className="max-w-4xl text-4xl md:text-5xl font-extrabold leading-tight">
          We build modern digital products <br />
          with <span className="text-blue-600">clean code</span> & thoughtful design
        </h1>

        <p className="max-w-2xl mt-6 text-lg md:text-xl text-gray-600">
          A full-stack team focused on performance, scalability,
          and great user experience.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#project">
          <button className="px-8 py-3 rounded-full bg-stone-600 text-white hover:text-black hover:bg-stone-200 hover:scale-105 transition-all shadow-md font-semibold">
            View Our Work
          </button>
          </a>
          <a href="#contact">
          <button className="px-8 py-3 rounded-full bg-gray-100 cursor-pointer hover:shadow text-gray-800 hover:bg-gray-200 hover:scale-105 transition-all shadow-md font-semibold">
            Get in Touch
          </button>
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-6 justify-center">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 shadow-sm font-medium text-gray-700">
            <FiZap className="w-4 h-4 text-blue-600" />
            Fast Development
          </div>

          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 shadow-sm font-medium text-gray-700">
            <FiFeather className="w-4 h-4 text-blue-600" />
            Clean UI
          </div>

          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 shadow-sm font-medium text-gray-700">
            <FiLock className="w-4 h-4 text-blue-600" />
            Secure & Scalable
          </div>
        </div>

      </section>
    </main>
  );
}

export default Home;
