import React from "react";
import { FiMail } from "react-icons/fi";

function Links() {
  return (
    <footer className="bg-stone-100 px-6 md:px-20 py-12 flex flex-col md:flex-row justify-between gap-10">
      

      <div className="flex flex-col gap-6 max-w-lg">

        <div className="flex items-center gap-2">
    
          <div className="w-10 h-10 bg-stone-50 shadow-black shadow flex justify-center items-center rounded-full">Go</div>
          <h1 className="text-2xl font-extrabold">
            ScriptHive.<span className="text-purple-800">ai</span>
          </h1>
        </div>

  
        <p className="text-gray-700">
          From strategy to execution. We craft digital solutions that move your business forward.
        </p>


        <div className="flex flex-wrap gap-6 text-gray-800 font-medium">
          {["Home", "Skills", "Team", "Services", "projects", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-purple-700 transition-colors active:scale-95"
            >
              {item}
            </a>
          ))}
        </div>
      </div>


      <div className="flex flex-col max-w-md gap-4">
        <h2 className="text-2xl font-bold">Subscribe to our newsletter</h2>
        <p className="text-gray-700">
          The latest news, articles & resources sent to your inbox weekly.
        </p>

        <div className="flex gap-2 mt-4">
          <div className="flex items-center flex-1 border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-purple-600 transition">
            <FiMail className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 outline-none bg-transparent text-gray-900"
            />
          </div>
          <button className="px-5 py-2 rounded-lg bg-stone-50 shadow shadow-black font-medium hover:bg-stone-200 active:scale-95 transition-shadow cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>

    </footer>
  );
}

export default Links;
