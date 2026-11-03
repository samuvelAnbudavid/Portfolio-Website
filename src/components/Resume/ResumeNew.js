import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./resume.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const localResumePath = `${process.env.PUBLIC_URL}/resume.pdf`;
const liveResumeUrl =
  "https://raw.githubusercontent.com/samuvelAnbudavid/resume/d53b68b4bd71ba9a4bdcd5600a22c665a8616083/SAMUVEL-resume%20.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [resumeLink, setResumeLink] = useState(localResumePath);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleFallbackToLive = () => setResumeLink(liveResumeUrl);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative", gap: "12px" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            style={{ maxWidth: "220px" }}
          >
            <AiOutlineEye />
            &nbsp;Open PDF
          </Button>

          <Button
            variant="primary"
            href={resumeLink}
            download="Samuvel-Anbudavid-Resume.pdf"
            style={{ maxWidth: "220px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download PDF
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={resumeLink}
            className="d-flex justify-content-center"
            onError={handleFallbackToLive}
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", gap: "12px" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            style={{ maxWidth: "220px" }}
          >
            <AiOutlineEye />
            &nbsp;Open PDF
          </Button>

          <Button
            variant="primary"
            href={resumeLink}
            download="Samuvel-Anbudavid-Resume.pdf"
            style={{ maxWidth: "220px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download PDF
          </Button>
        </Row>
        <ScrollToTop />
      </Container>
    </div>
  );
}

export default ResumeNew;
