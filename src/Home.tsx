import Profile from "./assets/Profile.jpeg";

const Home = () => {
  return (
    <div className="home-page">
      <img className="profile-pic" src={Profile} alt="profile picture" />
      <h1>Sam Shubitz</h1>
      <p>Portfolio Website</p>
    </div>
  );
};

export default Home;
