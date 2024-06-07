import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCard";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";


function Projects() {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Academic Advantage"
                // description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                description="Academic Advantage Is A React Application Facilitating Student Access To Teaching Assistants' Availability And Location Information Managed By The University's Student Support Center."
                ghLink="https://github.com/Megha30501/Academic-Advantages"
                demoLink="https://academic-advantage.onrender.com/"
              />
            </Col>
  
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bitsOfCode}
                isBlog={false}
                title="Bits-0f-C0de"
                description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
                ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                demoLink="https://blogs.soumya-jit.tech/"
              />
            </Col>
  
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={editor}
                isBlog={false}
                title="H1b Visa Prediction"
                description="Using Logistic Regression, Created Predictive Model For Forecasting H1B Visa Approval Likelihoods For Applicants."
                ghLink="https://github.com/Megha30501/H1b-Visa-Prediction"              
              />
            </Col>
  
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={leaf}
                isBlog={false}
                title="Toy Rental"
                description="Toy Rental, A Web Application Offering Toy Purchase Or Rental Options For Children And Categorized Into Packages."
                ghLink="https://github.com/Megha30501/Toy-Rental"
              />
            </Col>
  
          </Row>
        </Container>
      </Container>
    );
  }
  
  export default Projects;
  