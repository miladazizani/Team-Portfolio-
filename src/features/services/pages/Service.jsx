import { FaReact } from "react-icons/fa6";
const Service = () => {
    return (
        <main className="h-screen flex flex-col items-center justify-center">
            <section className="h-4/12 w-130 flex flex-col justify-center items-center gap-5">
                <h1 className="text-4xl font-bold">How We Can Help You ?</h1>
                <p className="text-xl font-light opacity-65 ">We build modern, fast, and scalable user interfaces that deliver a smooth and professional experience for users.</p>
            </section>
            <section className="h-8/12 w-full grid grid-cols-3 p-10 gap-10">
                <div className="h-5/8 flex items-center p-5 gap-5 rounded-2xl bg-cyan-50 shadow-2xl hover:-translate-y-3 transition-transform cursor-pointer">
                    <div className="w-1/4 flex justify-center items-center">
                        <FaReact className="h-20 w-20 rounded-full hover:text-blue-500 drop-shadow-2xl hover:drop-shadow-blue-400"/>
                    </div>
                    <div className="w-3/4">
                    <h1>React</h1>
                    <p>React powers smart, responsive interfaces turning complex code into something almost magical</p>
                    </div>
                </div>

               
            </section>


        </main>
    )
}
export default Service