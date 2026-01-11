const TechStackCard = ({title, description}) => {
    return (
        <>

            <div className="w-3/4">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="opacity-65 text-[14px] ">{description}</p>
            </div>
        </>
    )
}
export default TechStackCard;