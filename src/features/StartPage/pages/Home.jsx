import React from "react";

function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Navbar */}
      <header className="fixed top-0 w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-10 z-50 shadow-sm">
        <h1 className="text-2xl font-extrabold tracking-tight">
          Script<span className="text-blue-600">Hive</span>
        </h1>

        {/* Menu */}
        <nav className="hidden md:flex gap-6 font-medium text-sm">
          {["Home", "Services", "Our Work", "Team"].map((item) => (
            <button
              key={item}
              className="px-3 py-1 rounded-2xl hover:bg-blue-50 transition"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Contact Button */}
        <button className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-md">
          Contact
        </button>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6">
        <h2 className="max-w-4xl text-4xl md:text-5xl font-extrabold leading-tight">
          We design, code, and bring ideas to life.
          Welcome to the <span className="text-blue-600">Full-Stack</span> world!
        </h2>

        <p className="max-w-2xl mt-6 text-lg text-gray-600">
          Creating meaningful connections and turning bold ideas into interactive digital experiences.
        </p>

        {/* Hero Buttons */}
        <div className="mt-10 flex gap-5">
          <button className="px-8 py-3 rounded-full bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 transition shadow-lg">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg">
            Learn More
          </button>
        </div>

        {/* Feature Badges */}
        <div className="mt-14 flex flex-wrap gap-4 justify-center text-sm">
          {["⚡ Fast Development", "🎨 Modern UI", "🔒 Secure Code"].map((badge) => (
            <span
              key={badge}
              className="px-4 py-1 rounded-full bg-gray-100"
            >
              {badge}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
