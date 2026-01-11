import { Button } from "antd"

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
                        <div className="absolute inset-0 top-60 text-white overlay-1 bg-[#00000081] text-center rounded-b-2xl rounded-t-xl  text-2xl opacity-0 h-50  transition-opacity group-hover:opacity-100 flex flex-col gap-5 justify-center items-center">
                            <p className="text-2xl font-bold">Milad Azizani</p>
                            <p className="text-xl font-semibold">MA/Ai Learning</p>
                            <Button className="h-30 w-30 bg-red-600! font-bold!" type="primary">See Profile</Button>
                        </div>
                    </div>
                </div>
                <div className=" h-120">
                    <div className="relative group cursor-pointer">
                        <img src="./images/amin.jpg" className="h-110 rounded-2xl border-2 border-black" />
                        <div className="absolute inset-0 top-60 text-white overlay-1 bg-[#00000081] text-center  rounded-b-2xl rounded-t-xl  text-2xl opacity-0 h-50  transition-opacity group-hover:opacity-100 flex flex-col gap-5 justify-center items-center">
                            <p className="text-2xl font-bold">Amin Rasooli</p>
                            <p className="text-xl font-semibold">Designer and Mobile Devloper</p>
                            <Button className="h-30 w-30 bg-red-600! font-bold!" type="primary">See Profile</Button>
                        </div>
                    </div>
                </div>
                <div className=" h-120">
                    <div className="relative group cursor-pointer">
                        <img src="./images/mojib.jpg" className="h-110 rounded-2xl border-2 border-black" />
                        <div className="absolute inset-0 top-60 text-white overlay-1 bg-[#00000081] text-center  rounded-b-2xl rounded-t-xl  text-2xl opacity-0 h-50  transition-opacity group-hover:opacity-100 flex flex-col gap-5 justify-center items-center">
                            <p className="text-2xl font-bold">Mojib Movahed</p>
                            <p className="text-xl font-semibold">Technical Artist and Marketer</p>
                            <Button className="h-30 w-30 bg-red-600! font-bold!" type="primary">See Profile</Button>
                        </div>
                    </div>
                </div>
                <div className=" h-120">
                    <div className="relative group cursor-pointer">
                        <img src="./images/mojib.jpg" className="h-110 rounded-2xl border-2 border-black" />
                        <div className="absolute inset-0 top-60 text-white overlay-1 bg-[#00000081] text-center  rounded-b-2xl rounded-t-xl  text-2xl opacity-0 h-50  transition-opacity group-hover:opacity-100 flex flex-col gap-5 justify-center items-center">
                            <p className="text-2xl font-bold">Nawid Talaye</p>
                            <p className="text-xl font-semibold">DevOps and Tester</p>
                            <Button className="h-30 w-30 bg-red-600! font-bold!" type="primary">See Profile</Button>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}
export default Team