import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./blog.css";

const posts = [
  {
    title: "Backend Architecture for Scalable Products",
    category: "Architecture",
    readTime: "6 min read",
    excerpt:
      "A practical look at building maintainable backend services with clean boundaries, scalable APIs, and resilient operations.",
  },
  {
    title: "Node.js Patterns That Improve Production Performance",
    category: "Node.js",
    readTime: "5 min read",
    excerpt:
      "Useful practices for optimizing application performance, reducing latency, and keeping backend services stable under real traffic.",
  },
  {
    title: "Designing APIs for Growth and Team Velocity",
    category: "APIs",
    readTime: "7 min read",
    excerpt:
      "How to structure APIs that are easy to evolve, secure, and smooth for both clients and engineering teams.",
  },
  {
    title: "AI Learning Notes for Builders and Engineers",
    category: "AI",
    readTime: "4 min read",
    excerpt:
      "Practical notes from exploring AI tools, prompt workflows, and agentic patterns for modern application building.",
  },
];

function Blog() {
  return (
    <main className="page-shell blog-page">
      <section className="content-section blog-section">
        <Container className="section-shell">
          <div className="section-heading blog-heading-wrap">
            <p className="eyebrow">Blog</p>
            <h2>Insights on backend engineering, product thinking, and modern AI.</h2>
          </div>

          <Row className="blog-grid">
            {posts.map((post) => (
              <Col key={post.title} md={6} lg={4} className="blog-card-col">
                <article className="blog-card-view">
                  <div className="blog-meta-row">
                    <span className="blog-badge">{post.category}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>

                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>

                  <div className="blog-actions">
                    <Link to="/" className="blog-link primary-blog-link">
                      Read article
                    </Link>
                    <a
                      href="https://samuvel.hashnode.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className="blog-link secondary-blog-link"
                    >
                      Open blog
                    </a>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Blog;
