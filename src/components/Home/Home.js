import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Type from "./Type";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./home.css";

const stats = [
  { value: "7+", label: "Years of engineering" },
  { value: "Node.js", label: "Core backend stack" },
  { value: "Microservices", label: "Architecture focus" },
  { value: "AI", label: "Learning & prototyping" },
];

const focusAreas = [
  {
    title: "Backend engineering",
    text: "Designing resilient APIs, platform services, and scalable server-side systems for modern business applications.",
  },
  {
    title: "Enterprise systems",
    text: "Building secure, multi-tenant applications with workflow automation, role-based access control, and strong operational reliability.",
  },
  {
    title: "Event-driven platforms",
    text: "Working with Kafka, asynchronous processing, message-based integrations, and distributed application flows.",
  },
];

const skillGroups = [
  {
    title: "Backend",
    tags: ["Node.js", "TypeScript", "NestJS", "Express.js"],
  },
  {
    title: "Database",
    tags: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Architecture",
    tags: ["Microservices", "REST APIs", "Kafka", "Event-driven systems"],
  },
  {
    title: "DevOps",
    tags: ["Docker", "AWS", "CI/CD", "Git"],
  },
  {
    title: "Frontend",
    tags: ["React", "Angular"],
  },
  {
    title: "AI",
    tags: ["Python", "PyTorch", "LLM applications", "Agentic AI"],
  },
];

const experiencePoints = [
  "Backend development for scalable enterprise applications and APIs.",
  "Authentication, authorization, database optimization, and secure system design.",
  "Workflow automation and business process integration across distributed services.",
  "Event-driven architecture and production issue resolution in high-availability systems.",
];

const socialLinks = [
  { href: "https://github.com/samuvelAnbudavid", icon: <FaGithub />, label: "GitHub" },
  { href: "mailto:samuvelanbudavids@gmail.com", icon: <AiOutlineMail />, label: "Email" },
  { href: "https://www.linkedin.com/in/samuvel-anbu-david-888325136", icon: <FaLinkedinIn />, label: "LinkedIn" },
];

function Home() {
  return (
    <main className="page-shell">
      <section className="home-section" id="home">
        <Container className="home-content">
          <Row className="hero-row align-items-center">
            <Col lg={7} className="hero-copy">
              <p className="eyebrow">Senior Software Engineer / Backend Developer</p>
              <h1 className="headline">
                Building Scalable Backend Systems &amp; Intelligent Applications
              </h1>
              <p className="subtitle">
                Senior Software Engineer specializing in Node.js, TypeScript, backend
                architecture, distributed systems, and AI-powered applications.
              </p>

              <div className="hero-actions">
                <Link to="/project" className="primary-btn">
                  View Projects <FaArrowRight />
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn"
                  download="Samuvel-Anbudavid-Resume.pdf"
                >
                  <FaDownload /> Download Resume
                </a>
              </div>

              <div className="social-row" aria-label="social links">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="social-link"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </Col>

            <Col lg={5} className="hero-panel">
              <div className="profile-card">
                <span className="profile-badge">Available for backend and platform roles</span>
                <h2>Samuvel Anbudavid</h2>
                <p className="profile-role">Senior Software Engineer</p>
                <div className="typewriter-box">
                  <Type />
                </div>
                <ul className="profile-highlights">
                  <li>Node.js</li>
                  <li>TypeScript</li>
                  <li>NestJS</li>
                  <li>PostgreSQL</li>
                  <li>Kafka</li>
                  <li>AWS</li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row className="stats-row">
            {stats.map((item) => (
              <Col key={item.label} md={3} sm={6} className="stat-col">
                <div className="stat-card">
                  <span>{item.value}</span>
                  <p>{item.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="content-section">
        <Container className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Backend systems engineer building resilient, scalable products.</h2>
          </div>

          <Row className="story-row">
            <Col lg={7}>
              <div className="about-panel">
                <p>
                  I am a Senior Software Engineer with 7+ years of experience in software
                  development, specializing in backend systems, APIs, enterprise
                  applications, and platform engineering.
                </p>
                <p>
                  My work focuses on building scalable services using Node.js, TypeScript,
                  and modern backend frameworks while ensuring maintainability, security,
                  and performance across distributed systems.
                </p>
                <p>
                  I enjoy solving complex technical challenges across authentication,
                  workflow automation, data modeling, event-driven integrations, and
                  production issue resolution.
                </p>
              </div>
            </Col>

            <Col lg={5}>
              <div className="pillars">
                {focusAreas.map((area) => (
                  <div key={area.title} className="pillar-card">
                    <h3>{area.title}</h3>
                    <p>{area.text}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="content-section alt-section">
        <Container className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">Core Stack</p>
            <h2>Technology stack and delivery experience</h2>
          </div>

          <Row className="skills-grid">
            {skillGroups.map((group) => (
              <Col key={group.title} md={6} lg={4} className="skill-col">
                <div className="skill-card">
                  <h3>{group.title}</h3>
                  <div className="chip-list">
                    {group.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="content-section">
        <Container className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Focused on backend delivery, architecture, and resilient systems.</h2>
          </div>

          <div className="timeline">
            {experiencePoints.map((point, index) => (
              <div key={point} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <span className="timeline-year">Phase {index + 1}</span>
                  <p>{point}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="content-section alt-section">
        <Container className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">AI Learning Journey</p>
            <h2>Personal exploration in applied AI and intelligent systems</h2>
          </div>

          <Row className="ai-grid">
            {[
              "English Learning AI Assistant",
              "Speech Recognition and English Correction",
              "AI Chatbot",
              "Agentic AI Applications",
            ].map((project) => (
              <Col key={project} md={6} lg={3} className="ai-col">
                <div className="ai-card">
                  <span>Learning project</span>
                  <h3>{project}</h3>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="content-section contact-section">
        <Container className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let’s build reliable systems and innovative products together.</h2>
          </div>

          <Row className="contact-row">
            <Col lg={5}>
              <div className="contact-card">
                <div className="contact-link-row">
                  <span>Email</span>
                  <a href="mailto:samuvelanbudavids@gmail.com">samuvelanbudavids@gmail.com</a>
                </div>
                <div className="contact-link-row">
                  <span>LinkedIn</span>
                  <a href="https://www.linkedin.com/in/samuvel-anbu-david-888325136" target="_blank" rel="noreferrer">
                    samuvel-anbu-david
                  </a>
                </div>
                <div className="contact-link-row">
                  <span>GitHub</span>
                  <a href="https://github.com/samuvelAnbudavid" target="_blank" rel="noreferrer">
                    samuvelAnbudavid
                  </a>
                </div>
                <div className="contact-link-row">
                  <span>Resume</span>
                  <a
                    href="https://raw.githubusercontent.com/samuvelAnbudavid/resume/d53b68b4bd71ba9a4bdcd5600a22c665a8616083/SAMUVEL-resume%20.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                <div className="form-grid">
                  <label>
                    <span>Name</span>
                    <input type="text" name="name" placeholder="Your name" />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" placeholder="you@example.com" />
                  </label>
                </div>

                <label>
                  <span>Subject</span>
                  <input type="text" name="subject" placeholder="Project inquiry or collaboration" />
                </label>

                <label>
                  <span>Message</span>
                  <textarea name="message" rows="5" placeholder="Tell me about your project or opportunity..." />
                </label>

                <button type="submit" className="primary-btn form-submit">
                  Send Message <FaArrowRight />
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>

      <ScrollToTop />
    </main>
  );
}

export default Home;
