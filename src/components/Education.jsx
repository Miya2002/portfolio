import "./Education.css";
import { motion } from "framer-motion";

const certifications = [
  {
    number: "01",
    title: "Python + Django",
    provider: "NAVTTC",
    year: "2024",
    type: "Professional Course",
    description:
      "Professional training in Python programming and Django web application development.",
  },
  {
    number: "02",
    title: "Python Essentials",
    provider: "Coursera",
    year: "Part 1 & 2",
    type: "Online Certification",
    description:
      "Python programming fundamentals, problem-solving and practical development concepts.",
  },
  {
    number: "03",
    title: "Web Development",
    provider: "IBA",
    year: "Workshop",
    type: "Technical Workshop",
    description:
      "Workshop focused on modern website structure, development practices and web technologies.",
  },
  {
    number: "04",
    title: "Graphic Designing",
    provider: "Muhammad Ali Jinnah University",
    year: "Workshop",
    type: "Creative Workshop",
    description:
      "Explored visual communication, design fundamentals and practical graphic design principles.",
  },
  {
    number: "05",
    title: "Project Management",
    provider: "Coursera",
    year: "Course",
    type: "Online Certification",
    description:
      "Covered planning, teamwork, project organization and structured project delivery.",
  },
  {
    number: "06",
    title: "Remote Internship",
    provider: "GrowIntern",
    year: "1 Month",
    type: "Internship",
    description:
      "Completed practical assignments while developing professional communication and collaboration skills.",
  },
];

function Education() {
  return (
    <section id="education" className="education-section">

      {/* Background decoration */}
      <div className="education-bg-text">LEARNING</div>
      <div className="education-glow"></div>

      {/* HEADER */}
      <motion.div
        className="education-header"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="education-title-wrap">
          <span className="education-label">ACADEMIC JOURNEY</span>

          <h2>
            <span>/</span> EDUCATION
          </h2>
        </div>

        <p className="education-introduction">
          My academic journey and continuous professional learning have built
          a strong foundation in software engineering and web development.
        </p>
      </motion.div>

      {/* DEGREE */}
      <motion.article
        className="degree-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65 }}
      >
        <div className="degree-card-top">
          <span className="degree-number">01</span>

          <span className="degree-status">
            COMPLETED
          </span>
        </div>

        <div className="degree-content">

          {/* LEFT */}
          <div className="degree-main">
            <span className="degree-type">
              BACHELOR&apos;S DEGREE
            </span>

            <h3>
              BE Software
              <br />
              Engineering
            </h3>

            <div className="university">
              <strong>Muhammad Ali Jinnah University</strong>
              <span>Karachi, Pakistan</span>
            </div>
          </div>

          {/* CENTER */}
          <div className="degree-details">

            <div className="degree-detail">
              <span>STUDY PERIOD</span>
              <strong>2022 — 2026</strong>
            </div>

            <div className="degree-detail">
              <span>ACADEMIC PERFORMANCE</span>
              <strong>CGPA 3.60 / 4.00</strong>
            </div>

            <div className="degree-detail">
              <span>FIELD</span>
              <strong>Software Engineering</strong>
            </div>

          </div>

          {/* CGPA */}
          <div className="cgpa-wrapper">
            <div className="cgpa-circle">
              <strong>3.60</strong>
              <span>CGPA</span>
            </div>
          </div>

        </div>

        <div className="degree-watermark">SE</div>
      </motion.article>

      {/* CERTIFICATIONS HEADER */}
      <motion.div
        className="certifications-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <span>CONTINUOUS LEARNING</span>

          <h3>
            Courses, certifications & workshops
          </h3>
        </div>

        <div className="records-count">
          <strong>06</strong>
          <span>RECORDS</span>
        </div>
      </motion.div>

      {/* CERTIFICATIONS */}
      <div className="certifications-grid">
        {certifications.map((certificate, index) => (
          <motion.article
            className="certificate-card"
            key={`${certificate.title}-${certificate.provider}`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
            }}
          >
            <div className="certificate-top">
              <span className="certificate-number">
                {certificate.number}
              </span>

              <span className="certificate-arrow">
                ↗
              </span>
            </div>

            <div className="certificate-body">

              <span className="certificate-type">
                {certificate.type}
              </span>

              <h4>{certificate.title}</h4>

              <p>{certificate.description}</p>

            </div>

            <div className="certificate-footer">
              <span>{certificate.provider}</span>
              <span>{certificate.year}</span>
            </div>
          </motion.article>
        ))}
      </div>

    </section>
  );
}

export default Education;