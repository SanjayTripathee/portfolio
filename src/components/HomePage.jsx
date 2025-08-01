import { useNavigate } from 'react-router-dom';
import './CSS/home.css'
import Footer from './Footer';
// import profileImg from "../Public/sanjayTripathpas.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  const handleConnectClick = ()=>{
    navigate("/contact")
  }
 return (
  <>
   <div className="home-container">
      <div className="profile-image">
        <img src="/sanjayTripathee.jpg" alt="Profile" />
      </div>

      <h1 className="home-title">
        I’m <span className="gradient-text">Sanjay Tripathee</span>, Full Stack developer.
      </h1>

      <p className="home-description">
        I am a Full Stack developer from Kathmandu, Nepal with experience in building full-stack apps using MERN stack, Oracle PL/SQL, and scalable APIs.
      </p>

      <div className="button-group">
        <button className="btn-gradient" onClick={handleConnectClick}>Connect with me</button>
        <button className="btn-outline"><a href="/Sanjay_resume.pdf" target="_blank" rel="noopener noreferrer"  style={{ textDecoration: "none" }}>
   My Resume
</a></button>
      </div>
    </div>
    <Footer/>
  </>
   
  );
};

export default HomePage;
