import React from 'react';

const HomePage = () => {
  return (
    <div style={{
      fontFamily: 'Segoe UI, sans-serif',
      background: '#f8f9fa',
      color: '#212529',
      minHeight: '100vh',
      padding: '60px 20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
        Hello, I'm Sanjay 👋
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '700px', margin: 'auto' }}>
        I craft scalable web applications with powerful backends and modern user interfaces.
        Passionate about performance, clean code, and solving real-world problems.
      </p>

      <div style={{
        background: '#fff',
        marginTop: '40px',
        padding: '30px',
        borderRadius: '8px',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h2>🛠 Projects</h2>
        <ul style={{ textAlign: 'left', lineHeight: '1.8', paddingLeft: '20px' }}>
          <li><strong>Shopease:</strong> Full-stack E-commerce Platform</li>
          <li><strong>FormBuilder:</strong> Drag-and-drop form builder using React</li>
          <li><strong>Claim Processing System:</strong> Oracle PL/SQL APIs with dynamic HTML rendering</li>
        </ul>
      </div>

      <div style={{
        background: '#fff',
        marginTop: '20px',
        padding: '30px',
        borderRadius: '8px',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h2>📫 Contact Me</h2>
        <p>Email: sanjaytripathi@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">linkedin.com/in/yourprofile</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">github.com/yourusername</a></p>
      </div>
    </div>
  );
};

export default HomePage;
