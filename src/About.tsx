import GitStats from "./GitStats";

const About = () => {
  return (
    <div className="about-section" id="about">
      <h1>About me</h1>
      <p>
        I like making React apps and am interested in all things to do with
        software development. My professional background is in teaching music
        and foreign language, and I see coding as another expression of what
        makes those subjects so rewarding to learn and think about. There are
        always new things to learn and new problems to solve. I'm looking for a
        position where I can continue to sharpen my skills as a developer while
        also having the privilege of working with and learning from others.
      </p>
      <GitStats/>
    </div>
  );
};

export default About;