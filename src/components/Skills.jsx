import "./Skills.css";
import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Modern and responsive interfaces focused on usability.",
    skills: [
      { name: "React", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML & CSS", level: 98 },
      { name: "Bootstrap", level:90 },
      { name: "Tailwind", level: 85 },
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description: "Structured backend systems and scalable application logic.",
    skills: [
      { name: "Python", level: 88 },
      { name: "Django", level: 84 },
      { name: "REST APIs", level: 80 },
      { name: "OOP", level: 85 },
    ],
  },
  {
    number: "03",
    title: "Database & Cloud",
    description: "Reliable data management and modern deployment tools.",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "SQLite", level: 86 },
      { name: "AWS", level: 65 },
    ],
  },
  {
    number: "04",
    title: "Professional Expertise",
    description: "Strong communication, leadership and problem-solving.",
    skills: [
      { name: "Project Management", level: 85 },
      { name: "Leadership", level: 88 },
      { name: "Communication", level: 90 },
      { name: "Critical Thinking", level: 87 },
    ],
  },
];

const tools = [
  "Python",
  "Django",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "C++",
  "MySQL",
  "PostgreSQL",
  "GitHub",
  "Vercel",
  "Netlify",
  "AWS",
];

function Skills() {
  return (
    <section id="skills" className="skills-section">

      {/* HEADER */}
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="skills-title-wrap">
          <span className="skills-bg-title">CAPABILITIES</span>

          <h2>
            <span>/</span> SKILLS &amp; EXPERTISE
          </h2>
        </div>

        <p className="skills-introduction">
          A balanced combination of software engineering, web development,
          database management and professional expertise.
        </p>
      </motion.div>

      {/* TECHNOLOGY STRIP */}
      <div className="skills-strip">
        <div className="skills-strip-inner">
          {tools.map((tool, index) => (
            <span key={`${tool}-${index}`}>
              {tool}
              <b>•</b>
            </span>
          ))}
        </div>
      </div>

      {/* SKILL CARDS */}
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article
            className="skill-card"
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
          >
            <div className="skill-card-top">
              <span className="skill-number">{group.number}</span>

              <span className="skill-arrow">↗</span>
            </div>

            <div className="skill-card-content">
              <h3>{group.title}</h3>

              <p>{group.description}</p>
            </div>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>

                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="skill-line">
                    <span
                      style={{
                        width: `${skill.level}%`,
                      }}
                    />
                  </div>

                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      {/* TOOLS */}
      <motion.div
        className="tools-section"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <div className="tools-title">
          <span>TOOLS &amp; PLATFORMS</span>
          <small>Technologies I work with</small>
        </div>

        <div className="tools-list">
          {[
            "GitHub",
            "Visual Studio Code",
            "PyCharm",
            "Hostinger",
            "Vercel",
            "Netlify",
            "Microsoft 365",
            "Canva",
            "AWS",
          ].map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </motion.div>

    </section>
  );
}

export default Skills;