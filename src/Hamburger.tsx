import hamburger from "./assets/Hamburger_icon.svg";

const Hamburger = ({ onClick }: { onClick: () => void }) => {
  return (
    <img
      onClick={onClick}
      className="hamburger"
      src={hamburger}
      alt="hamburger"
    />
  );
};

export default Hamburger;
