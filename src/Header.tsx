import Hamburger from "./Hamburger";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const linksClass = isOpen ? "dropdown-list" : "header-list";

  return (
    <nav className="header-nav">
      <ul onClick={toggleOpen} className={linksClass}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <Hamburger onClick={toggleOpen} />
    </nav>
  );
};

export default Header;
