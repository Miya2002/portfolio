import "./Experience.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    organization: "Jai Prime Global",
    role: "Backend Developer Intern",
    date: "2 Months",
    category: "Professional Experience",
    description:
      "Developed and managed backend functionality while contributing to secure, scalable and optimized application performance.",
    details: [
      "Developed and managed an advanced administrative panel.",
      "Created backend functionalities for smooth system operations.",
      "Handled application and database integration.",
      "Helped maintain secure and optimized application performance.",
    ],
    technologies: ["Backend Development", "Database", "Admin Panel"],
  },
  {
    number: "02",
    organization: "GrowIntern",
    role: "Remote Intern",
    date: "1 Month",
    category: "Technical Internship",
    description:
      "Completed a remote internship focused on practical technical learning, professional development and project-based experience.",
    details: [
      "Completed assigned technical and project-based tasks.",
      "Strengthened remote collaboration and communication skills.",
      "Applied development concepts in a professional environment.",
      "Gained practical experience through structured assignments.",
    ],
    technologies: ["Remote Work", "Development", "Collaboration"],
  },
  {
    number: "03",
    organization: "TEDxClifton",
    role: "Hospitality Team Lead",
    date: "2025",
    category: "Leadership Experience",
    description:
      "Led the hospitality team and supported smooth event operations while maintaining a positive experience for attendees.",
    details: [
      "Led and coordinated the event hospitality team.",
      "Supported attendees and managed hospitality requirements.",
      "Collaborated with different teams during event operations.",
      "Helped ensure attendee satisfaction throughout the event.",
    ],
    technologies: ["Leadership", "Teamwork", "Communication"],
  },
  {
    number: "04",
    organization: "GDG Kolachi",
    role: "DevFest Event Coordinator",
    date: "2024",
    category: "Community Experience",
    description:
      "Coordinated event operations and logistics for DevFest by Google Developer Group Kolachi.",
    details: [
      "Assisted with event planning and operational coordination.",
      "Managed logistics during the technology event.",
      "Communicated with team members and event participants.",
      "Contributed to the successful execution of DevFest.",
    ],
    technologies: ["Event Management", "Coordination", "Problem Solving"],
  },
];

function Experience() {
  const [openExperience, setOpenExperience] = useState(0);

  const toggleExperience = (index) => {
    setOpenExperience(openExperience === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section">

      {/* Background decoration */}
      <div className="experience-glow experience-glow-one"></div>
      <div className="experience-glow experience-glow-two"></div>

      <div className="experience-bg-text">EXPERIENCE</div>

      <div className="experience-container">

        {/* HEADER */}
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="experience-heading">

            <div className="experience-eyebrow">
              <span className="eyebrow-line"></span>
              CAREER JOURNEY
            </div>

            <h2>
              My <span>Experience</span>
            </h2>

            <p className="experience-intro">
              A collection of professional, technical, leadership and
              community experiences that shaped my skills and approach to
              solving real-world problems.
            </p>

          </div>

          <div className="experience-header-side">
            <span className="header-side-number">04</span>
            <span className="header-side-text">EXPERIENCES</span>
          </div>
        </motion.div>

        {/* EXPERIENCE LIST */}
        <div className="experience-list">

          {experiences.map((experience, index) => {
            const isOpen = openExperience === index;

            return (
              <motion.article
                key={experience.organization}
                className={`experience-card ${
                  isOpen ? "experience-card-open" : ""
                }`}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >

                {/* Timeline */}
                <div className="experience-timeline">

                  <div className="timeline-number">
                    {experience.number}
                  </div>

                  <div className="timeline-line"></div>

                </div>

                {/* CARD CONTENT */}
                <div className="experience-card-content">

                  <button
                    type="button"
                    className="experience-main"
                    onClick={() => toggleExperience(index)}
                    aria-expanded={isOpen}
                  >

                    <div className="experience-main-left">

                      <div className="experience-category">
                        {experience.category}
                      </div>

                      <h3>{experience.organization}</h3>

                      <div className="experience-role-mobile">
                        {experience.role}
                      </div>

                    </div>

                    <div className="experience-main-middle">

                      <span className="info-label">
                        ROLE
                      </span>

                      <span className="info-value">
                        {experience.role}
                      </span>

                    </div>

                    <div className="experience-main-date">

                      <span className="info-label">
                        DURATION
                      </span>

                      <span className="info-value">
                        {experience.date}
                      </span>

                    </div>

                    <div
                      className={`experience-arrow ${
                        isOpen ? "arrow-open" : ""
                      }`}
                    >
                      <span>↗</span>
                    </div>

                  </button>

                  {/* EXPANDED CONTENT */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="experience-details"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          },
                          opacity: {
                            duration: 0.3,
                          },
                        }}
                      >

                        <div className="experience-details-grid">

                          {/* Description */}
                          <div className="experience-description-box">

                            <span className="detail-label">
                              ABOUT THE ROLE
                            </span>

                            <p>
                              {experience.description}
                            </p>

                          </div>

                          {/* Responsibilities */}
                          <div className="experience-responsibilities">

                            <span className="detail-label">
                              KEY CONTRIBUTIONS
                            </span>

                            <ul>
                              {experience.details.map((detail, i) => (
                                <li key={detail}>
                                  <span className="list-number">
                                    0{i + 1}
                                  </span>

                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>

                          </div>

                          {/* Technologies */}
                          <div className="experience-technologies">

                            <span className="detail-label">
                              SKILLS & AREAS
                            </span>

                            <div className="technology-list">
                              {experience.technologies.map(
                                (technology) => (
                                  <span
                                    key={technology}
                                    className="technology-pill"
                                  >
                                    {technology}
                                  </span>
                                )
                              )}
                            </div>

                          </div>

                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* FOOTER */}
        <motion.div
          className="experience-footer"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="footer-message">
            <span className="footer-dot"></span>

            <p>
              Always learning. Always building.
            </p>
          </div>

          <a href="#contact" className="experience-contact-link">
            <span>Let's work together</span>
            <span className="contact-arrow">↗</span>
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Experience;