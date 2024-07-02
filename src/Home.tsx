import Profile from "./assets/Profile.jpeg";

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="home-page-header">Hi, my name is...</h1>
      <img className="profile-pic" src={Profile} alt="profile picture" />
      <h1 id="name">Sam Shubitz</h1>
      <p>Welcome to my portfolio</p>
    </div>
  );
};

export default Home;
