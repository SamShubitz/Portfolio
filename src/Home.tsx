import Profile from "./assets/profile.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-text">
      <h1 className="home-page-header">Sam Shubitz</h1>
      <p>Welcome to my portfolio</p>
      </div>
      <div className="home-body">
      <img src={Profile} alt="profile image"/>
      </div>
    </div>
  );
};

export default Home;
