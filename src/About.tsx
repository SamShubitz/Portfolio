import GitStats from "./GitStats"
import ToolsUsed from "./ToolsUsed"
import useObserver from "./useObserver"

const About = () => {
  const [ref, isVisible] = useObserver();
  const classname = isVisible ? "visible" : "hidden";

  return (
    <div ref={ref} className={`about-section ${classname}`} id="about">
      <div className="about-text">
      <h1>About me</h1>
      <p>
        I enjoy making React apps and am interested in all things to do with
        software development. My professional background is in teaching music
        and foreign language, and I see coding as another expression of what
        makes those subjects so rewarding to learn and think about. There are
        always new things to learn and new problems to solve. I'm looking for a
        position where I can continue to sharpen my skills as a developer in an
        environment where I can work with and learn from others.
      </p>
      </div>
      <div className="about-data">
        <GitStats/>
        <ToolsUsed/>
      </div>
    </div>
  );
};

export default About;