import ProjectCard from "./ProjectCard";
import lemon from "./assets/lemon.png";
import caged from "./assets/Logo.jpeg";
import flashcard from "./assets/Flashcard.jpeg";
import typescript from "./assets/Typescript.svg";
import javascript from "./assets/JS.svg";
import css from "./assets/CSS.svg";
import react from "./assets/React.svg";
import netcore from "./assets/netcore.svg";
import postgres from "./assets/postgresql.svg";

const cards = [
  {
    name: "unCAGED Guitar App",
    image: caged,
    description:
      "A web app that allows users to learn from chord diagrams or create and save their own",
    url: "uncagedguitar",
    gitHubLink: "https://github.com/SamShubitz/CAGED-Guitar-App",
    toolsUsed: [typescript, react, css, netcore, postgres],
  },
  {
    name: "Little Lemon Restaurant",
    image: lemon,
    description: "A mock restaurant website project",
    url: "littlelemon",
    gitHubLink: "https://github.com/SamShubitz/Lemon-app",
    toolsUsed: [javascript, react, css],
  },
  {
    name: "Trivia Cards App",
    image: flashcard,
    description:
      "A simple web app that displays trivia flash cards and allows users to create their own",
    url: "triviacards",
    gitHubLink: "https://github.com/SamShubitz/TriviaCardsApp",
    toolsUsed: [typescript, react, css],
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
        toolsUsed={card.toolsUsed}
      />
    </li>
  );
});

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h1 className="projects-section-title">My Projects</h1>
      <ul className="project-list">{projectCards}</ul>
    </div>
  );
};

export default Projects;
