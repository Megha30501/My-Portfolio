import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCard";
import poster from "../../Assets/Projects/poster.png";
import dashboard from "../../Assets/Projects/dashboard.png";
import AA from "../../Assets/Projects/Academic-Advantage.png";
import toy from "../../Assets/Projects/toy.jpg";
import visa from "../../Assets/Projects/visa.jpg";

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
              imgPath={poster}
              isBlog={false}
              title="Resource Constraints Intrusion Detection Framework for VANET"
              description="Developed a lightweight Machine Learning (ML) framework for intrusion detection in Vehicular Ad-Hoc Networks (VANETs), utilizing Principal Component Analysis (PCA) for dimensionality reduction. This optimized framework significantly enhances VANET security by achieving high detection performance while minimizing resource consumption."
              ghLink="https://scholarlycommons.pacific.edu/rcs/2024/undergraduate/8/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Finance Dashboard"
              description="Created a streamlined Personal Finance Dashboard using React,chart.js for the frontend, Node.js/Express for the backend, and MongoDB for data storage. This dashboard allows users to track expenses and incomes, featuring a summary view of total income, expenses, and net balance, alongside a dynamic expense breakdown chart. Users can add, edit, and delete transactions with ease, supported by RESTful API endpoints for efficient data management."
              ghLink="https://github.com/Megha30501/Finance-Dashboard"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AA}
              isBlog={false}
              title="Academic Advantage"
              description="Created a React application to provide 24/7 access to Teaching Assistant (TA) information from the university's Student Support Center database. Implemented features for locating TA availability and contact details, and developed RESTful web services using Node.js for seamless integration with a MongoDB database, ensuring efficient data retrieval and real-time updates."
              ghLink="https://github.com/Megha30501/Academic-Advantages"
              demoLink="https://academic-advantage.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={visa}
              isBlog={false}
              title="H1b Visa Prediction"
              description="Developed a predictive model using machine learning algorithms, including logistic regression and random forest, to forecast H1B visa application outcomes with an 87% accuracy rate. Analyzed applicant demographics, job details, and employer characteristics to offer insights into the H1B visa application process for employers and foreign workers."
              ghLink="https://github.com/Megha30501/H1b-Visa-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toy}
              isBlog={false}
              title="Toy Rental"
              description="Built an e-commerce website using PHP, MySQL, and HTML/CSS, offering options to rent or buy toys. Integrated an online payment gateway with Google Pay, achieving a 90% success rate in test transactions, and enhanced user experience by streamlining the rental and purchase process for customers."
              ghLink="https://github.com/Megha30501/Toy-Rental"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
