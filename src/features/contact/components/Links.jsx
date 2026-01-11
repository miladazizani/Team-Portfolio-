function Links() {
  return (
    <main className="h-4/12 bg-stone-100 px-20 pt-10 flex justify-between ">
      <section className="flex flex-col gap-3">
        <div className="flex gap-2">
          <img src="" alt="" title="" />
          <h1 className="text-2xl">scripthive.<span className="text-purple-800">ai</span></h1>
        </div>
        <div className="w-130">
          From strategy to execution. We craft digital solutions that move your business forward.
        </div>
        <div className="flex gap-5 mt-10">
          <a href="" className="cursor-pointer hover:text-purple-700 active:scale-95">Home</a>
          <a href="" className="cursor-pointer hover:text-purple-700 active:scale-95">Services</a>
          <a href="" className="cursor-pointer hover:text-purple-700 active:scale-95">Our works</a>
          <a href="" className="cursor-pointer hover:text-purple-700 active:scale-95">Our Team</a>
        </div>
      </section>
      <section>
        <div>
          <h1 className="text-2xl">Subscribe to our newsletter</h1>
          <p className="mt-3">The latest news, articles & resources sent to your inbox weekly.</p>
        </div>
        <div className="flex justify-between items-center mt-10">
          <p>Enter your eamil</p>
          <button className="px-4 py-2 rounded bg-purple-800 text-xl text-white hover:bg-purple-700 active:scale-95 cursor-pointer">Subscribe</button>
        </div>
      </section>
    </main>
  )
}

export default Links