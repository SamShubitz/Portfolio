import ProjectCard from "./ProjectCard";
import lemon from "./assets/Lemon.svg";
import caged from "./assets/Logo.jpeg";
import flashcard from "./assets/Flashcard.jpeg";

const cards = [
  {
    name: "Little Lemon Restaurant",
    image: lemon,
    description: "Final project for a Coursera capstone course",
    url: "littlelemon",
    gitHubLink: "https://github.com/SamShubitz/Lemon-app",
  },
  {
    name: "unCAGED Guitar App",
    image: caged,
    description:
      "A simple web app that allows users to learn from chord diagrams or create and save their own",
    url: "uncagedguitar",
    gitHubLink: "https://github.com/SamShubitz/CAGED-Guitar-App",
  },
  {
    name: "Trivia Cards App",
    image: flashcard,
    description:
      "A simple web app that displays trivia flash cards and allows users to create their own",
    url: "triviacards",
    gitHubLink: "https://github.com/SamShubitz/TriviaCardsApp",
  },
];

const projectCards = cards.map((card) => {
  return (
    <li key={card.name}>
      <ProjectCard
        name={card.name}
        className={card.url}
        image={card.image}
        description={card.description}
        URL={card.url}
        gitHubLink={card.gitHubLink}
      />
    </li>
  );
});

const Projects = () => {
  return (
    <div className="projects-section">
      <ul className="project-list">{projectCards}</ul>
    </div>
  );
};

export default Projects;
