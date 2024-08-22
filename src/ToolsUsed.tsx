import axios from "./assets/axios.svg";
import efcore from "./assets/efcore.png";
import netcore from "./assets/netcore.svg";
import reactquery from "./assets/reactquery.png";
import postgresql from "./assets/postgresql.svg";
import react from "./assets/React.svg";
import reactrouter from "./assets/reactrouter.svg";
import typescript from "./assets/Typescript.svg";
import nextjs from "./assets/NextJs.svg";
import tailwind from "./assets/Tailwind.svg";
import ToolCard from "./ToolCard";

const tools = [
  { name: "React", image: react },
  { name: "TypeScript", image: typescript },
  { name: "Tailwind", image: tailwind },
  { name: ".Net Core", image: netcore },
  { name: "EF Core", image: efcore },
  { name: "Postgres", image: postgresql },
  { name: "Axios", image: axios },
  { name: "React Query", image: reactquery },
  { name: "React router", image: reactrouter },
  { name: "NextJS", image: nextjs },
];

const toolCards = tools.map((tool) => {
  return (
    <li key={tool.name}>
      <ToolCard name={tool.name} image={tool.image} />
    </li>
  );
});

const ToolsUsed = () => {
  return (
    <div className="tools-used-section">
      <h1>Tools</h1>
      <ul>{toolCards}</ul>
    </div>
  );
};

export default ToolsUsed;
