import useObserver from "./useObserver";

const Home = () => {
  const [ref, isVisible] = useObserver();
  const classname = isVisible ? "visible" : "hidden";

  return (
    <div ref={ref} className={`home-page ${classname}`}>
      <div className="home-text">
        <h1 className="home-page-header">Sam Shubitz</h1>
        <p>Welcome to my portfolio</p>
      </div>
      <span />
    </div>
  );
};

export default Home;
