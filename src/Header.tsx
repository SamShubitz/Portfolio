import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-nav">
      <ul className="header-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
