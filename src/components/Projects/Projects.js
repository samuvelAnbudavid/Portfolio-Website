import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./project.css";

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack commerce application built to support catalog browsing, user flows, and online transactions with a simple, scalable architecture.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    architecture:
      "Frontend experience with a Node.js and Express backend, structured around modular API services and a document-based data layer.",
    responsibilities: [
      "Built the application backend and API layer.",
      "Implemented product, cart, and user-related workflows.",
      "Worked with database modeling and transaction handling.",
    ],
    ghLink: "https://github.com/samuvelAnbudavid/E-cart",
    demoLink: "https://ecart.onrender.com/",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio designed to present engineering experience, project work, and technical profile in a modern, accessible UI.",
    stack: ["React", "Bootstrap", "CSS"],
    architecture:
      "Single-page portfolio experience with route-based navigation, reusable sections, and a clean, responsive layout for desktop and mobile.",
    responsibilities: [
      "Designed and developed the portfolio frontend experience.",
      "Structured content sections for projects, resume, and overview.",
      "Implemented responsive styling and dark/light theme support.",
    ],
    ghLink: "https://github.com/samuvelAnbudavid/Portfolio-Website",
    demoLink: "https://samuvelAnbudavid.github.io/Portfolio-Website/",
  },
  {
    title: "Private Chat Application",
    description:
      "A personal messaging application designed for real-time communication, resource sharing, and community-driven interaction.",
    stack: ["React", "Firebase", "CSS"],
    architecture:
      "Frontend-driven chat experience with realtime messaging, user discovery, and lightweight data storage for a simple communication flow.",
    responsibilities: [
      "Built the UI and core chat experience.",
      "Implemented communication flows and social interaction patterns.",
      "Structured reusable components for messaging and user interfaces.",
    ],
    ghLink: "https://github.com/samuvelAnbudavid/Private-Chat",
    demoLink: "https://chat-app-samuvelAnbudavid.vercel.app/",
  },
  {
    title: "Expense Tracker",
    description:
      "A personal finance tracking tool focused on monitoring expenses, savings, and investment records with a simple user experience.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    architecture:
      "Client-server application with transaction records stored in MongoDB and a focused dashboard for managing financial history.",
    responsibilities: [
      "Developed the transaction tracking flows.",
      "Modeled data and created API endpoints for financial records.",
      "Built a clean dashboard experience for viewing and managing entries.",
    ],
    ghLink: "https://github.com/samuvelAnbudavid/Expense-Tracker",
    demoLink: "https://expense-tracker.samuvelAnbudavid.vercel.app/",
  },
];

const aiProjects = [
  "English Learning AI Assistant",
  "Speech Recognition and English Correction",
  "AI Chatbot",
  "Agentic AI Applications",
];

function Projects() {
  return (
    <main className="page-shell project-page">
      <section className="content-section project-section">
        <Container className="section-shell">
          <div className="section-heading project-heading-wrap">
            <p className="eyebrow">Featured Projects</p>
            <h2>Applications and systems built with a backend-first mindset.</h2>
          </div>

          <Row className="project-grid">
            {featuredProjects.map((project) => (
              <Col key={project.title} md={6} lg={4} className="project-card">
                <article className="project-card-view">
                  <div className="project-header">
                    <span className="project-label">System</span>
                    <h3>{project.title}</h3>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="tech-row">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip project-chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-details">
                    <div>
                      <h4>Architecture</h4>
                      <p>{project.architecture}</p>
                    </div>

                    <div>
                      <h4>Responsibilities</h4>
                      <ul>
                        {project.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="project-actions">
                    <a href={project.ghLink} target="_blank" rel="noreferrer" className="project-link">
                      GitHub
                    </a>
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noreferrer" className="project-link secondary-link">
                        Live Demo
                      </a>
                    )}
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="content-section alt-section">
        <Container className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">AI Learning</p>
            <h2>Learning and personal projects focused on intelligent systems</h2>
          </div>

          <Row className="ai-grid">
            {aiProjects.map((project) => (
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

      <ScrollToTop />
    </main>
  );
}

export default Projects;
