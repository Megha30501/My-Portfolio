import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Megha Patel </span>
            and a <span className="purple"> recent graduate.</span>
            <br />
            I have completed Masters in Computer Science from the University of the Pacific.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hand me a keyboard, and let's unravel the magic together!"{" "}
          </p>
          <footer className="blockquote-footer">Megha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
