import { useEffect, useState } from "react";
import "./Navbar.css";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 760) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar ${menuOpen ? "navbar-menu-open" : ""}`}>
        {/* LOGO */}
        <a href="#home" className="logo" onClick={closeMenu}>
          TA<span>.</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              {item.name}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <a href="#contact" className="desktop-talk-button">
          <span>Let's Talk</span>
          <span className="talk-arrow">↗</span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "menu-toggle-open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <span className="menu-label">NAVIGATION</span>
            <span className="menu-line"></span>
          </div>

          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <a
                href={`#${item.id}`}
                key={item.id}
                onClick={closeMenu}
              >
                <span className="mobile-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="mobile-link-name">
                  {item.name}
                </span>

                <span className="mobile-link-arrow">↗</span>
              </a>
            ))}
          </nav>

          <div className="mobile-menu-bottom">
            <span>AVAILABLE FOR WORK</span>

            <a href="#contact" onClick={closeMenu}>
              Let's Talk
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <button
          type="button"
          className="mobile-overlay"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      )}
    </>
  );
}

export default Navbar;