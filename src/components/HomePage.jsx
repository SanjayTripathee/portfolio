import './CSS/home.css'
// import profileImg from "../Public/sanjayTripathpas.jpg";

const HomePage = () => {
 return (
    <div className="home-container">
      <div className="profile-image">
        <img src="/sanjayTripathee.jpg" alt="Profile" />
      </div>

      <h1 className="home-title">
        I’m <span className="gradient-text">Sanjay Tripathi</span>, frontend developer based in Nepal.
      </h1>

      <p className="home-description">
        I am a frontend developer from Kathmandu, Nepal with experience in building full-stack apps using MERN stack, Oracle PL/SQL, and scalable APIs.
      </p>

      <div className="button-group">
        <button className="btn-gradient">Connect with me</button>
        <button className="btn-outline">My resume</button>
      </div>
    </div>
  );
};

export default HomePage;
