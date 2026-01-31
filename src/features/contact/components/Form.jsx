import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);


    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main
      id="contact"
      className="flex flex-col justify-center items-center py-20 px-6 bg-gray-50"
    >

      <section className="text-center max-w-2xl mb-12">
        <h1 className="text-4xl font-extrabold mb-3">Reach Out to Us</h1>
        <p className="text-gray-600 text-lg">
          Ready to grow your brand? Let’s connect and build something exceptional.
        </p>
      </section>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-xl"
      >
 
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex flex-col flex-1">
            <label className="mb-2 font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              required
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="mb-2 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              required
            />
          </div>
        </div>


        <div className="flex flex-col mb-8">
          <label className="mb-2 font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            className="border border-gray-300 p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black transition"
            required
          ></textarea>
        </div>


        <div className="text-center">
          <button
            type="submit"
            className="px-10 py-3 rounded-xl bg-stone-100 font-semibold hover:bg-stone-200 shadow-md active:scale-95 transition-all"
          >
            Send Message
          </button>
        </div>
      </form>
    </main>
  );
}

export default Form;
