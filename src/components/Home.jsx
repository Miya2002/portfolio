import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-topline home-reveal home-reveal--1">
        <p className="home-availability">
          <span aria-hidden="true" />
          Available for opportunities
        </p>
      </div>

      <h1
        className="home-name home-reveal home-reveal--2"
        aria-label="Tasmiya Ansari"
      >
        <span>TASMIYA</span> ANSARI
      </h1>

      <div
        className="home-divider home-reveal home-reveal--3"
        aria-hidden="true"
      >
        <span>01</span>
      </div>

      <div className="home-content">
        <div className="home-introduction home-reveal home-reveal--4">
          <p className="home-kicker">Designing logic into experiences</p>
           <br></br>
          <h2>Software Engineer</h2>
         

          <p className="home-summary">
            I build practical digital solutions that transform real-world
            problems into clear, reliable, and engaging experiences.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work
              <span aria-hidden="true">↘</span>
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>

        <div className="portrait-container home-reveal home-reveal--3">
          <div className="portrait-backdrop" aria-hidden="true" />

          <img
            src="/profile4.png"
            alt="Tasmiya Ansari"
            className="profile-image"
          />
        </div>

        <nav
          className="home-socials home-reveal home-reveal--4"
          aria-label="Social links"
        >
          <a
            href="https://www.linkedin.com/in/tasmiya-ansari-2b97a1290?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <span aria-hidden="true">↗</span>
          </a>

          <a href="#contact" className="secondary-button">
              Contact Me
            </a>

          <a href="#projects">
            Selected Work
            <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </div>

      <a
        className="scroll-indicator home-reveal home-reveal--4"
        href="#projects"
      >
        <span aria-hidden="true" />
        Scroll to discover
      </a>
    </section>
  );
}

export default Home;