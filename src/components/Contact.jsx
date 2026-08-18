import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const email = "tasmiyaansari2002@gmail.com";

  // Copy email
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Unable to copy email:", error);
    }
  };

  // Contact form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    setSending(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const senderEmail = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email: senderEmail,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send message.");
      }

      // Success message
      setStatus(
        "Message sent successfully! I'll get back to you within 24 hours."
      );

      // Clear form
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        "Unable to send your message. Please try again or email me directly."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background-text">CONTACT</div>

      {/* Availability */}
      <motion.div
        className="contact-availability"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span></span>
        Available for new opportunities
      </motion.div>

      {/* Heading */}
      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <p>HAVE A PROJECT OR OPPORTUNITY IN MIND?</p>

        <h2>
          LET&apos;S CREATE
          <span> SOMETHING MEANINGFUL.</span>
        </h2>
      </motion.div>

      {/* Main Content */}
      <div className="contact-layout">
        {/* Contact Information */}
        <motion.div
          className="contact-information"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="contact-description">
            I&apos;m interested in software engineering, web development and
            collaborative opportunities where I can contribute, learn and
            create meaningful digital experiences.
          </p>

          {/* Contact Details */}
          <div className="contact-details">
            {/* Email */}
            <div className="contact-detail">
              <span>Email</span>

              <div>
                <a href={`mailto:${email}`}>{email}</a>

                <button type="button" onClick={copyEmail}>
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Telephone */}
            <div className="contact-detail">
              <span>Telephone</span>

              <div>
                <a href="tel:+923153418052">+92 315 3418052</a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-detail">
              <span>Location</span>

              <div>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/tasmiya-ansari-2b97a1290"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span>↗</span>
            </a>

            

            <a href="#home">
              Back to top <span>↑</span>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Top line */}
          <div className="form-row">
            {/* Name */}
            <div className="form-field">
              <label htmlFor="contact-name">Your name</label>

              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-field">
              <label htmlFor="contact-email">Email address</label>

              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Subject */}
          <div className="form-field">
            <label htmlFor="contact-subject">Subject</label>

            <input
              type="text"
              id="contact-subject"
              name="subject"
              placeholder="What would you like to discuss?"
              required
            />
          </div>

          {/* Message */}
          <div className="form-field">
            <label htmlFor="contact-message">Your message</label>

            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Tell me about your project or opportunity..."
              required
            ></textarea>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="send-message-button"
            disabled={sending}
          >
            <span>{sending ? "Sending..." : "Send Message"}</span>

            <span className="send-arrow">
              {sending ? "..." : "↗"}
            </span>
          </button>

          {/* Status Message */}
          {status && (
            <div
              className={`contact-status ${
                status.startsWith("Message sent")
                  ? "success"
                  : "error"
              }`}
            >
              {status}
            </div>
          )}
        </motion.form>
      </div>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>© 2026 Tasmiya Ansari</p>
        <p>Software Engineer · Web Developer</p>
        <p>Designed with purpose</p>
      </footer>
    </section>
  );
}

export default Contact;