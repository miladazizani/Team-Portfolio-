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
                <div className=" h-120">
                    <div className="relative group cursor-pointer">
                    <img src="./images/milad.jpg" className="h-110 rounded-2xl border-2 border-black" />
                    <p className="absolute inset-0 top-80 text-white overlay-1 bg-[#00000065] text-center rounded-2xl  text-2xl opacity-0  transition-opacity group-hover:opacity-100">Milad Azizani<br/> Machine Learning </p>
                    
                    </div>
                </div>
                <div className=" h-120">
                    <div className="relative group cursor-pointer">
                    <img src="./images/mojib.jpg" className="h-110 rounded-2xl border-2 border-black" />
                    <p className="absolute inset-0 top-80 text-white overlay-1 bg-[#00000065] text-center rounded-2xl  text-2xl opacity-0  transition-opacity group-hover:opacity-100">Milad Azizani<br/> Machine Learning </p>
                    
                    </div>
                </div>
                <div className=" h-120">
                    <div className="relative group cursor-pointer">
                    <img src="./images/milad.jpg" className="h-110 rounded-2xl border-2 border-black" />
                    <p className="absolute inset-0 top-80 text-white overlay-1 bg-[#00000065] text-center rounded-2xl  text-2xl opacity-0  transition-opacity group-hover:opacity-100">Milad Azizani<br/> Machine Learning </p>
                    
                    </div>
                </div>
                <div className=" h-120">
                    <div className="relative group cursor-pointer">
                    <img src="./images/mojib.jpg" className="h-110 rounded-2xl border-2 border-black" />
                    <p className="absolute inset-0 top-80 text-white overlay-1 bg-[#00000065] text-center rounded-2xl  text-2xl opacity-0  transition-opacity group-hover:opacity-100">Milad Azizani<br/> Machine Learning </p>
                    
                    </div>
                </div>
    
            </section>
        </main>
    )
}
export default Team