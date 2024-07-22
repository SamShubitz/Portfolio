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
import useObserver from "./useObserver";

const cards = [
  {
    name: "unCAGED Guitar App",
    image: caged,
    description:
      "A web app that allows users to learn from chord diagrams or create and save their own. The hosted version uses local storage to allow saving of chord progressions. The fullstack implementation uses .NET Core and PostGreSQL, and can be viewed on my GitHub page.",
    url: "uncagedguitar",
    gitHubLink: "https://github.com/SamShubitz/CAGED-Guitar-App",
    toolsUsed: [typescript, react, css, netcore, postgres],
  },
  {
    name: "Little Lemon Restaurant",
    image: lemon,
    description:
      "A mock restaurant website with a simulated reservation system. UI design comes from existing assets but its implementation is fully original.",
    url: "littlelemon",
    gitHubLink: "https://github.com/SamShubitz/Lemon-app",
    toolsUsed: [javascript, react, css],
  },
  {
    name: "Trivia Cards App",
    image: flashcard,
    description:
      "A simple web app that makes use of an API to display trivia flash cards and also allows users to create their own.",
    url: "triviacards",
    gitHubLink: "https://github.com/SamShubitz/TriviaCardsApp",
    toolsUsed: [typescript, react, css],
  },
];

const projectCards = cards.map((card) => {
  return (
    <li className="proj-item" key={card.name}>
      <p>{card.description}</p>
      <ProjectCard
        name={card.name}
        className={card.url}
        image={card.image}
        URL={card.url}
        gitHubLink={card.gitHubLink}
        toolsUsed={card.toolsUsed}
      />
    </li>
  );
});

const Projects = () => {
  const [ref, isVisible] = useObserver();
  const classname = isVisible ? "visible" : "hidden";

  return (
    <div ref={ref} className={`projects-section ${classname}`} id="projects">
      <h1 className="projects-section-title">My Projects</h1>
      <ul className="project-list">{projectCards}</ul>
    </div>
  );
};

export default Projects;
