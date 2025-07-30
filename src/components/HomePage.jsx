import React from 'react';
import profileImg from "../Public/sanjayTripathpas.jpg"; // replace with your actual image path

const HomePage = () => {
  return (
    <div style={{
      backgroundColor: '#0f0f0f',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center'
    }}>
      {/* Profile Image */}
      <div style={{
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '6px solid white',
        marginBottom: '30px'
      }}>
        <img src={profileImg} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Gradient Name & Title */}
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '10px'
      }}>
        I’m <span style={{
          background: 'linear-gradient(to right, #c471ed, #f64f59)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Sanjay Tripathi</span>, frontend developer based in Nepal.
      </h1>

      <p style={{
        color: '#bbb',
        fontSize: '1.1rem',
        maxWidth: '700px',
        margin: '0 auto 40px'
      }}>
        I am a frontend developer from Kathmandu, Nepal with experience in building full-stack apps using MERN stack, Oracle PL/SQL, and scalable APIs.
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button style={{
          padding: '12px 24px',
          background: 'linear-gradient(to right, #c471ed, #f64f59)',
          border: 'none',
          color: 'white',
          borderRadius: '30px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Connect with me
        </button>
        <button style={{
          padding: '12px 24px',
          background: 'transparent',
          border: '2px solid white',
          color: 'white',
          borderRadius: '30px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          My resume
        </button>
      </div>
    </div>
  );
};

export default HomePage;
