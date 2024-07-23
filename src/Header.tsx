import Hamburger from "./Hamburger";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const visibility = isOpen ? "visible-list" : "hidden-list";

  const headerList = (
    <ul className="header-list">
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
  );

  const dropdownList = (
    <>
      <ul onClick={toggleOpen} className={`dropdown-list ${visibility}`}>
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
    </>
  );

  return (
    <nav className="header-nav">
      {headerList}
      {dropdownList}
    </nav>
  );
};

export default Header;
