import ProjectCard from "./ProjectCard";
import lemon from "./assets/lemon.png";
import caged from "./assets/Logo.jpeg";
import trivia from "./assets/trivia.png";
import typescript from "./assets/Typescript.svg";
import javascript from "./assets/JS.svg";
import css from "./assets/CSS.svg";
import react from "./assets/React.svg";
import netcore from "./assets/netcore.svg";
import postgres from "./assets/postgresql.svg";
import tailwind from "./assets/Tailwind.svg";
import nextjs from "./assets/NextJs.svg";
import useObserver from "./useObserver";

const cards = [
  {
    name: "unCAGED Guitar App",
    image: caged,
    description:
      "A web app that allows users to learn from chord diagrams or create and save their own. The hosted version uses local storage to allow saving of chord progressions. The fullstack implementation uses .NET Core and can be viewed on my GitHub page.",
    url: "uncagedguitar",
    gitHubLink: "https://github.com/SamShubitz/CAGED-Guitar-App",
    toolsUsed: [typescript, react, css, netcore, postgres],
  },
  {
    name: "Flashcards App",
    image: trivia,
    description:
      "A full-stack web app that allows users to create and save flashcard decks or play a simple trivia game.",
    url: "triviacards",
    gitHubLink: "https://github.com/SamShubitz/Flashcards-App",
    toolsUsed: [typescript, react, nextjs, tailwind],
  },
  {
    name: "Little Lemon Restaurant",
    image: lemon,
    description:
      "A mock restaurant website with a simulated reservation system. Implementation of the UI is fully original, working from given assets and designs.",
    url: "littlelemon",
    gitHubLink: "https://github.com/SamShubitz/Lemon-app",
    toolsUsed: [javascript, react, css],
  },
];

const projectCards = cards.map((card) => {
  return (
    <li className="proj-item" key={card.name}>
      <div className="proj-text">
        <a
          href={
            card.url === "triviacards"
              ? "https://trivia-game-opal-sigma.vercel.app/"
              : card.url
          }
          target="_blank"
        >
          <h1>{card.name}</h1>
        </a>
        <p>{card.description}</p>
      </div>
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
