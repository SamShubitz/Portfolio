const ToolCard = ({name, image}: {name: string, image: string}) => {
    return (
        <div className="tool-card">
            <img src={image} alt={`${name}`}/>
            <p>{name}</p>
        </div>
    )
}

export default ToolCard;