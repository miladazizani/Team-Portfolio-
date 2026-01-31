import { motion } from 'framer-motion'

const blogs = [
  {
    id: 1,
    title: "Why Clean Code Matters in React Projects",
    excerpt:
      "Clean code improves readability, scalability, and long-term maintenance in modern React applications.",
    author: "Mojiburrahman",
    role: "Frontend Developer",
    tag: "React",
  },
  {
    id: 2,
    title: "Context API vs Zustand: Real Use Cases",
    excerpt:
      "Choosing the right state management tool can drastically affect performance and maintainability.",
    author: "ScriptHive Team",
    role: "Full-Stack",
    tag: "State",
  },
  {
    id: 3,
    title: "Tailwind CSS: Building Fast Without Chaos",
    excerpt:
      "Utility-first CSS helps teams ship faster while keeping UI consistent and clean.",
    author: "UI Team",
    role: "Frontend",
    tag: "CSS",
  },
  {
    id: 4,
    title: "Real-Time Chat Apps: Problems You Will Face",
    excerpt:
      "Sockets, auth, scaling, and UI sync issues when building chat systems.",
    author: "Backend Team",
    role: "Engineering",
    tag: "Chat",
  },
];

function Blog() {
  return (
    <motion.main id="blog" className="min-h-screen bg-stone-50 px-6 md:px-12 py-24 text-gray-900" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}}>

      <motion.section className="max-w-4xl mb-20" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}}>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Team Blog
        </h1>
        <p className="mt-5 text-lg text-gray-600 leading-relaxed">
          Practical thoughts, real experience, and technical insights
          from our development team.
        </p>
      </motion.section>

      <motion.section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}}>
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="group relative rounded-2xl bg-white/80 backdrop-blur border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative z-10 p-6 flex flex-col h-full">
              <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase">
                {blog.tag}
              </span>

              <h2 className="mt-4 text-lg font-bold leading-snug group-hover:text-white transition-colors duration-300">
                {blog.title}
              </h2>

              <p className="mt-3 text-sm text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                {blog.excerpt}
              </p>

              <div className="mt-auto pt-6 text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                <span className="font-medium">{blog.author}</span>
                <span className="mx-1">·</span>
                {blog.role}
              </div>
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
          </article>
        ))}
      </motion.section>

    </motion.main>
  );
}

export default Blog;
