import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import TechStack from "./TechStack";
import ToolStack from "./ToolStack";
// import laptopImg from "../../Assets/about.png";
import laptopImg from "../../Assets/intro.svg";

function About() {
    return (
      <Container fluid className="about-section">
         <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About <strong className="purple">Me</strong>
              </h1>
              <AboutCard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "30px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <TechStack />
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <ToolStack />
        </Container>
      </Container>
    );
  }
  
  export default About;
  