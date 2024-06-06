import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Megha Patel</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} MP</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/Megha30501"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/meghapatel30501/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                   href="mailto:meghap30501@gmail.com"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <HiOutlineMail /> 
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Footer;
  