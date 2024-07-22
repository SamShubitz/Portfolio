interface CardProps {
  name: string;
  className: string;
  image: string;
  URL: string;
  gitHubLink: string;
  toolsUsed: string[];
}

const ProjectCard = ({
  name,
  className,
  image,
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
        <a href={`/${URL}`} target="_blank">
          <h1>{name}</h1>
          <img className="app-logo" src={image} alt="app-logo" />
        </a>
      </div>
      <div className="card-body">
        <div className="card-footer">
          <a href={gitHubLink}>View on GitHub</a>
          <ul className="tool-list">{toolList}</ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
