interface CardProps {
  name: string;
  className: string;
  image: string;
  description: string;
  URL: string;
  gitHubLink: string;
  toolsUsed: string[];
}

const ProjectCard = ({
  name,
  className,
  image,
  description,
  URL,
  gitHubLink,
  toolsUsed,
}: CardProps) => {
  const toolList = toolsUsed.map((tool) => {
    return (
      <li key={tool}>
        <img className="tool-logo" src={tool} alt="tool logo" />
      </li>
    );
  });

  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        <a href={`/${URL}`}>
          <h1>{name}</h1>
          <img className="app-logo" src={image} alt="app-logo" />
        </a>
      </div>
      <div className="card-body">
        <p>{description}</p>
        <div className="card-footer">
          <a href={gitHubLink}>View on GitHub</a>
          <ul className="tool-list">{toolList}</ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
