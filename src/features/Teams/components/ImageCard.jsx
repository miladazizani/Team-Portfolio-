import { Button } from "antd"

const ImageCard = ({name, job, src}) => {
    return (
        <div className=" h-120">
            <div className="relative group cursor-pointer">
                <img src={src} className="h-110 rounded-2xl border-2 border-black" />
                <div className="absolute inset-0 top-60 text-white overlay-1 bg-[#00000081] text-center  rounded-b-2xl rounded-t-xl  text-2xl opacity-0 h-50  transition-opacity group-hover:opacity-100 flex flex-col gap-5 justify-center items-center">
                    <p className="text-2xl font-bold">{name}</p>
                    <p className="text-xl font-semibold">{job}</p>
                    <Button className="h-30 w-30 bg-red-600! font-bold!" type="primary">See Profile</Button>
                </div>
            </div>
        </div>
    )
}
export default ImageCard