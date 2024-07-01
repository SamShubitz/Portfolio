interface CardProps {
  name: string;
  className: string;
  image: string;
  description: string;
  URL: string;
  gitHubLink: string;
}

const ProjectCard = ({
  name,
  className,
  image,
  description,
  URL,
  gitHubLink,
}: CardProps) => {
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
        <a href={gitHubLink}>Link to repository</a>
      </div>
    </div>
  );
};

export default ProjectCard;
