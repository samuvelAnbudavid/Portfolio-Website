import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "../Home/home.css";

const skillGroups = [
  { title: "Backend", tags: ["Node.js", "TypeScript", "NestJS", "Express.js"] },
  { title: "Database", tags: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
  { title: "Architecture", tags: ["Microservices", "REST APIs", "Kafka", "Event-driven systems"] },
  { title: "DevOps", tags: ["Docker", "AWS", "CI/CD", "Git"] },
  { title: "Frontend", tags: ["React", "Angular"] },
  { title: "AI", tags: ["Python", "PyTorch", "LLM applications", "Agentic AI"] },
];

const experiencePillars = [
  "Backend development and platform engineering",
  "Enterprise application and workflow automation",
  "Authentication, authorization, and secure API design",
  "Database optimization, integration, and troubleshooting",
  "Event-driven systems and production issue resolution",
];

function About() {
  return (
    <main className="page-shell">
      <section className="content-section page-section">
        <Container className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Senior software engineer focused on backend systems, APIs, and scalable application delivery.</h2>
          </div>

          <Row className="story-row">
            <Col lg={7}>
              <div className="about-panel">
                <p>
                  I am a Senior Software Engineer with 7+ years of experience creating and
                  supporting scalable backend systems, enterprise applications, and modern
                  digital platforms.
                </p>
                <p>
                  My work blends backend architecture, API design, data handling, system
                  reliability, and problem solving, with a strong emphasis on clean
                  engineering practices and business value.
                </p>
                <p>
                  I enjoy building solutions that connect services, automate workflows,
                  secure access, and support growing user and business requirements across
                  distributed systems.
                </p>
              </div>
            </Col>

            <Col lg={5}>
              <div className="pillars">
                {experiencePillars.map((pillar) => (
                  <div key={pillar} className="pillar-card">
                    <h3>{pillar}</h3>
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
            <p className="eyebrow">Skillset</p>
            <h2>Technology stack and engineering strengths</h2>
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

          <div className="section-cta">
            <Link to="/project" className="primary-btn">
              Explore Projects <FaArrowRight />
            </Link>
          </div>
        </Container>
      </section>

      <ScrollToTop />
    </main>
  );
}

export default About;
