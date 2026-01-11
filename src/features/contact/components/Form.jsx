function Form() {
  return (
    <main className="flex flex-col justify-center items-center h-8/12">
        <section className="w-full h-4/12 flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-3">Reach out to us</h1>
            <p>Ready to grow your brand? Let's connect and build something</p>
            <p>excoptional together.</p>
        </section>
        <section className="w-150 h-6/12">
            <article className="flex justify-between h-4/10 items-center">
                <div className="flex flex-col h-20 justify-between ">
                    <label>Your name</label>
                    <input className="border border-gray-500 w-70 p-1.5 pl-3 rounded" type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className="flex flex-col h-20 justify-between ">
                    <label>Email</label>
                    <input className="border border-gray-500 w-70 p-1.5 pl-3 rounded" type="email" name="email" placeholder="Enter your email" />
                </div>
            </article>
            <article className="6/10 flex flex-col w-full gap-3">
                <label>Message</label>
                <textarea  className="border border-gray-500 w-full p-1.5 rounded" placeholder="Enter your message"></textarea>
            </article>
        </section>
        <section className="h-2/12 w-150">
            <button className="py-2 px-4 rounded-xl bg-purple-800 text-white cursor-pointer hover:bg-purple-700 active:scale-95">Submit -></button>
        </section>
    </main>
  )
}

export default Form