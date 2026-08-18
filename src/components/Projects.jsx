import "./Projects.css";
import { motion } from "framer-motion";

const projects = [
   {
    number: "01",
    title: "AllRounder-Ai",
    category: "Web Applications",
    type: "Interview Platform",
    description:
      "An AI-powered interview platform that helps users practice, analyze, and improve their interview performance.",
    technologies: ["Next.js", "React", "TypeScript ","Tailwind CSS","Supabase PostgreSQL"],
    image: "/projects/allrounder.png",
    liveLink: "https://allrounder-ai-coach-three.vercel.app/",
    accent: "#07966c",

   
  },

   {
    number: "02",
    title: "Moonrank",
    category: "Web Applications",
    type: "Bussiness Website",
    description:
      "A modern fashion website featuring responsive product displays and a clean, customer-focused shopping interface.",
    technologies: ["React", "Bootstrap", "JavaScript"],
    image: "/projects/moonrank.png",
    liveLink: "https://moonrank.co",
    accent: "#bd6288",
  },
   {
    number: "03",
    title: "Sourcelens",
    category: "Web Applications",
    type: "Notes Summarizer",
    description:
      "An AI-powered document analysis platform that allows users to upload PDF files, automatically generate concise summaries, and ask questions directly from the uploaded document.",
    technologies: ["React.js", "FastAPI", "NestJS","JavaScript","PDF Processing,","AI/NLP"],
    image: "/projects/sourcelens.png",
    liveLink: "https://github.com/Miya2002/sourcelens-ai.git",
    accent: "#9b3452",
  },

  {
    number: "04",
    title: "Quiz Assessment Website",
    category: "Management Systems",
    type: "Quiz Website",
    description:
      "Full-stack quiz platform built with Python, Django, HTML, CSS, JavaScript, and Bootstrap, featuring candidate authentication, category-based assessments, score calculation, personalized suggestions, result management, and a responsive user-friendly interface. Integrated PostgreSQL and deployed the application on Vercel.",
    technologies: ["Python", "Django", "HTML", "CSS","JavaScript","Bootstarp"],
    image: "/projects/quiz.png",
    liveLink: "https://quiz-django-website-ynd4.vercel.app/",
    accent: "#c46a32",
  },

  {
    number: "05",
    title: "Whimsy Wear",
    category: "Web Applications",
    type: "E-commerce website",
    description:
      "A modern and user-friendly jewelry e-commerce website designed to provide a smooth online shopping experience. It includes essential pages such as Home, Shop, Features, About, and Contact, with a clean and elegant interface focused on showcasing jewelry products.",
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    image: "/projects/ecommerce.jpeg",
    liveLink: "https://lnkd.in/dKCFA6vN",
    accent: "#3d7c9e",
  },

 
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-background-text">PROJECTS</div>

      {/* =========================
          HEADING
      ========================= */}

      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div>
          <div className="projects-eyebrow">
            <span>04</span>
            <p>Selected Work</p>
          </div>

          <h2>
            MY
            <span>PROJECTS.</span>
          </h2>
        </div>

        <div className="projects-heading-side">
          <span className="projects-heading-line"></span>

          <p>
            A selection of projects I've built through academic,
            professional, and personal exploration.
          </p>
        </div>
      </motion.div>

      {/* =========================
          PROJECT GRID
          NO FILTERS
      ========================= */}

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            style={{
              "--project-accent": project.accent,
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="project-card-inner">

              {/* IMAGE */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="project-image"
                />

                <div className="project-image-overlay"></div>
                <div className="project-image-shine"></div>

                <div className="project-image-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                {/* PROJECT LINK */}
                {project.liveLink && project.liveLink !== "#" ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-launch-button"
                    aria-label={`Open ${project.title}`}
                  >
                    <span className="launch-label">
                      View Project
                    </span>

                    <span className="launch-arrow">↗</span>
                  </a>
                ) : (
                  <div className="project-launch-button project-launch-disabled">
                    <span className="launch-arrow">↗</span>
                  </div>
                )}
              </div>

              {/* INFORMATION */}
              <div className="project-information">
                <p className="project-type">
                  {project.type}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-footer">
                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <span className="project-card-arrow">
                    ↗
                  </span>
                </div>
              </div>

            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;