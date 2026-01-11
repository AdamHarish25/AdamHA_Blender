import { useState, useEffect } from 'react';
import './App.css';

const projects = [
  { id: 1, title: "Minimalist Workspace room - Side 1", category: "Environment", img: "./Workspace-done1.png" },
  { id: 2, title: "Minimalist Workspace room - Side 2", category: "Environment", img: "./Workspace-done2.png" },
  { id: 3, title: "Minimalist Workspace room - Side 3", category: "Environment", img: "./Workspace-done8.png" },
  { id: 4, title: "Minimalist Workspace room - Side 4", category: "Environment", img: "./Workspace-done5.png" },
  { id: 5, title: "Minimalist Workspace room - Side 5", category: "Environment", img: "./Workspace-done6.png" },
  { id: 6, title: "Minimalist Workspace room - Side 6", category: "Environment", img: "./Workspace-done7.png" },
];

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <header style={{
        background: scrollY > 50 ? 'rgba(10, 10, 10, 0.9)' : 'transparent',
        borderBottom: scrollY > 50 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
      }}>
        <div className="container nav-content">
          <div className="logo">ADAM<span style={{ color: 'var(--accent)' }}>.</span>HA</div>
          <nav className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <h1>Crafting Digital<br />Reality</h1>
          <p>
            Specializing in 3D modeling, photorealistic rendering, and motion graphics using Blender.
          </p>
          <a href="#work" className="cta-button">View Selected Works</a>
        </div>
      </section>

      <section id="work" className="gallery-section">
        <div className="container">
          <h2 className="section-title">Selected Projects</h2>
          <div className="gallery-grid">
            {projects.map((project) => (
              <div key={project.id} className="gallery-item">
                <img src={project.img} alt={project.title} loading="lazy" />
                <div className="item-overlay">
                  <h3 className="item-title">{project.title}</h3>
                  <span className="item-category">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p>
            I'm a passionate 3D artist with a strong focus on photorealistic rendering and motion graphics. With a keen eye for detail and a deep understanding of lighting and composition, I bring your ideas to life with precision and creativity.
          </p>
        </div>
      </section>

      <section id='projectLinks' className='project-links-section'>
        <div className="container">
          <h2 className="section-title">Project Links</h2>
          <div className='cta-button-container'>
            <a href='https://drive.google.com' target='_blank' rel='noopener noreferrer' className='cta-button cta-button--outline'>
              Drive
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Adam HA. Created with Blender & React.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
