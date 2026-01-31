import { Button } from "antd";

const ImageCard = ({ name, job, src }) => {
  return (
    <div className="w-full max-w-xs">
      <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg">
  
        <img
          src={src}
          alt={name}
          className="w-full h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
        />


        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <div className="text-center text-white">
            <p className="text-2xl font-bold">{name}</p>
            <p className="text-lg font-medium mb-4">{job}</p>
            <Button
              className="bg-red-600 hover:shadow shadow-black border-none hover:bg-red-700 font-bold"
            >
              See Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
