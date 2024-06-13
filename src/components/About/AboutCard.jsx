import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize:"1em"}}>
           
          From a young age, I was fascinated by <span className="purple"> technology</span> and how it <span className="purple">shapes our world </span>. This curiosity led me to pursue a career in computer science, where I can combine my love for coding with my desire to make a meaningful impact. Throughout my academic journey and professional career, I have honed my skills in various programming languages such as <span className="purple"> C++, Python, Java</span>, and web technologies including <span className="purple"> HTML5, CSS3, JavaScript, and PHP</span>. I have experience working with frameworks and libraries like <span className="purple">  React.js, Redux, Node.js, Express.js, and Bootstrap</span>.
            <br/>

            My technical journey has been enriched by various internships, where I have enhanced my skills and applied them in real-world scenarios. During my <span className="purple">internships at Brainy Beam Pvt. Ltd., CreArt Solution, and the Center for Business and Policy Research</span>, I have worked on diverse projects ranging from web development to data analysis. These experiences have taught me to <span className="purple">quickly adapt</span> to different <span className="purple"> codebases and technologies</span>,<span className="purple"> collaborate </span> effectively with <span className="purple">teams</span>, and transform ideas into deliverable solutions.
            <br/>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hang out with Family and Friends
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
