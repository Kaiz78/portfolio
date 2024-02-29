import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";


const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;



const Title = styled.div`
  display: inline-block;
  margin: 0 auto;
  font-family: "Permanent Marker";
  text-align: center;
`;

let bio = 'I am a software engineer with a passion for learning and teaching. I am a full-stack developer with experience in JavaScript, TypeScript, React, Redux, Node.js, Express, and PostgreSQL. I am also familiar with Python, Flask, and MongoDB. I am a lifelong learner and enjoy learning new technologies and frameworks. I am a strong advocate for clean, maintainable, and scalable code. I am also a strong advocate for test-driven development and continuous integration. I am a strong advocate for Agile methodologies and Scrum. I am a strong advocate for DevOps and CI/CD. I am a strong advocate for cloud computing and serverless architectures. I am a strong advocate for microservices and containerization. I am a strong advocate for RESTful APIs and GraphQL. I am a strong advocate for open-source software and contributing to the community. I am a strong advocate for diversity and inclusion. I am a strong advocate for mentorship and coaching. I am a strong advocate for remote work and distributed teams. I am a strong advocate for lifelong learning and continuous improvement. I am a strong advocate for work-life balance and mental health. I am a strong advocate for environmental sustainability and social responsibility. I am a strong advocate for ethical and responsible technology. I am a strong advocate for privacy and data protection. I am a strong advocate for digital literacy and digital inclusion. I am a strong advocate for digital transformation and innovation. I am a strong advocate for entrepreneurship and startups. I am a strong advocate for education and lifelong learning. I am a strong advocate for community service and volunteerism. I am a strong advocate for social justice and human rights. I am a strong advocate for mental health and well-being. I am a strong advocate for diversity and inclusion. I am a strong advocate for environmental sustainability and social responsibility. I am a strong advocate for ethical and responsible technology. I am a strong advocate for privacy and data protection. I am a strong advocate for digital literacy and digital inclusion. I am a strong advocate for digital transformation and innovation. I am a strong advocate for entrepreneurship and startups. I am a strong advocate for education and lifelong learning. I am a strong advocate for community service and volunteerism. I am a strong advocate for social justice and human rights. I am a strong advocate for mental health and well-being. I am a strong advocate for diversity and inclusion. I am a strong advocate for environmental sustainability and social responsibility. I am a strong advocate for ethical and responsible technology.'




function About()  {    
    return (
    <>
      <br /><br />
         <StyledAboutMe className="section">
        <div>
          <div className="d-flex">
            <Title>
              <h2>About Me</h2>
              <div className="underline"></div>            
            </Title>
          </div>
          <div className="d-flex flex-column text-center p-5">
              <div>
                <p>{bio}</p>
              </div>
          </div>
        </div>
      </StyledAboutMe>
    </>
    )
}


export default About
