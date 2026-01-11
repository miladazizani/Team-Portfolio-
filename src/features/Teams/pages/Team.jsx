const Team = () => {
    return (
        <main className="h-260 flex flex-col items-center p-4">
            <section className="h-4/12">
                <div className="h-4/12 w-130 flex flex-col justify-center items-center gap-5 mt-25">
                    <h1 className="text-4xl font-bold">The Minds Behind the Code</h1>
                    <p className="text-xl font-light opacity-65 text-center ">We design, we code, and we turn ideas into smooth user experience.</p>
                </div>
            </section>
            <section className="h-8/12 w-full grid grid-cols-4 gap-6">
                <div className="bg-rose-300">
                    <img src="./images/milad.jpg" className="h-110 rounded border-2 border-black" />
                    
                </div>
                <div className="bg-rose-300">
                    <img src="./images/mojib.jpg" className="h-110 rounded border-2 border-black" />
                </div>
                <div className="bg-rose-300">
                    <img src="./images/mojib.jpg" className="h-110 rounded border-2 border-black" />
                </div>
                <div className="bg-rose-300">
                    <img src="./images/milad.jpg" className="h-110 rounded border-2 border-black" />
                </div>
            </section>
        </main>
    )
}
export default Team