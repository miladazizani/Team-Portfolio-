const TechStackCard = ({ title, description }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2 text-sm md:text-base">{description}</p>
    </div>
  );
};

export default TechStackCard;
