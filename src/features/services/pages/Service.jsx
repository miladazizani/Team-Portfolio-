import { FaReact } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
const Service = () => {
    return (
        <main className="h-260 flex flex-col items-center justify-center">
            <section className="h-4/12 w-130 flex flex-col justify-center items-center gap-5">
                <h1 className="text-4xl font-bold">How We Can Help You ?</h1>
                <p className="text-xl font-light opacity-65 ">We build modern, fast, and scalable user interfaces that deliver a smooth and professional experience for users.</p>
            </section>
            <section className="h-8/12 w-full grid grid-cols-3 p-10 gap-10">
                <div className="h-5/8 flex items-center p-5 gap-5 rounded-xl bg-cyan-50 shadow-2xl hover:-translate-y-3 transition-transform cursor-pointer border-t-4 border-blue-600">
                    <div className="w-1/4 flex justify-center items-center">
                        <FaReact className="h-20 w-20 rounded-full hover:text-blue-500 drop-shadow-2xl hover:drop-shadow-blue-400"/>
                    </div>
                    <div className="w-3/4">
                    <h1 className="text-xl font-bold">React</h1>
                    <p className="opacity-65 text-[14px] ">React builds fast, interactive UIs making web pages a little more magical.</p>
                    </div>
                </div>
                <div className="h-5/8 flex items-center p-5 gap-5 rounded-xl bg-cyan-50 shadow-2xl hover:-translate-y-3 transition-transform cursor-pointer border-t-4 border-orange-600">
                    <div className="w-1/4 flex justify-center items-center">
                        <DiJavascript className="h-20 w-20 rounded-full hover:text-orange-500 drop-shadow-2xl hover:drop-shadow-orange-400"/>
                    </div>
                    <div className="w-3/4">
                    <h1 className="text-xl font-bold">JavaScript</h1>
                    <p className="opacity-65 text-[14px] ">JS turns boring websites into dynamic adventures one quirky function at a time.</p>
                    </div>
                </div>
                <div className="h-5/8 flex items-center p-5 gap-5 rounded-xl bg-cyan-50 shadow-2xl hover:-translate-y-3 transition-transform cursor-pointer border-t-4 border-blue-600">
                    <div className="w-1/4 flex justify-center items-center">
                        <SiTailwindcss className="h-20 w-20 rounded-full hover:text-blue-500 drop-shadow-2xl hover:drop-shadow-blue-400"/>
                    </div>
                    <div className="w-3/4">
                    <h1 className="text-xl font-bold">Tailwind</h1>
                    <p className="opacity-65 text-[14px] ">Tailwind designs clean, responsive UIs — faster than your coffee brews.</p>
                    </div>
                </div>
                <div className="h-5/8 flex items-center p-5 gap-5 rounded-xl bg-cyan-50 shadow-2xl hover:-translate-y-3 transition-transform cursor-pointer border-t-4 border-green-600">
                    <div className="w-1/4 flex justify-center items-center">
                        <SiNextdotjs className="h-20 w-20 rounded-full hover:text-green-500 drop-shadow-lg hover:drop-shadow-green-400"/>
                    </div>
                    <div className="w-3/4">
                    <h1 className="text-xl font-bold">Next.js</h1>
                    <p className="opacity-65 text-[14px] ">Node.js Runs JavaScript on the server turning ideas into live apps.</p>
                    </div>
                </div>
                <div className="h-5/8 flex items-center p-5 gap-5 rounded-xl bg-cyan-50 shadow-2xl hover:-translate-y-3 transition-transform cursor-pointer border-t-4 border-purple-600">
                    <div className="w-1/4 flex justify-center items-center">
                        <IoLogoFigma className="h-20 w-20 rounded-full hover:text-purple-700 drop-shadow-2xl hover:drop-shadow-purple-400"/>
                    </div>
                    <div className="w-3/4">
                    <h1 className="text-xl font-bold">Figma</h1>
                    <p className="opacity-65 text-[14px] ">Design, prototype, and collaborate making pixels dance together</p>
                    </div>
                </div>
                <div className="h-5/8 flex items-center p-5 gap-5 rounded-xl bg-cyan-50 shadow-2xl hover:-translate-y-3 transition-transform cursor-pointer border-t-4 border-rose-600">
                    <div className="w-1/4 flex justify-center items-center">
                        <DiResponsive className="h-20 w-20 rounded-full hover:text-rose-700 drop-shadow-2xl hover:drop-shadow-rose-400"/>
                    </div>
                    <div className="w-3/4">
                    <h1 className="text-xl font-bold">Responsive Designe</h1>
                    <p className="opacity-65 text-[14px] ">One site, all screens no pinch-zoom, no headaches</p>
                    </div>
                </div>

               
            </section>


        </main>
    )
}
export default Service