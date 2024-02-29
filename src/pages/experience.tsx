import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import ProjectCard from "../components/projectCard";


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



let avatar_url = 'unknown'
let name = 'Amine Mokhtari';

function Experience()  {    
    return (
    <>
      <br /><br />
         <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Expérience</h2>
              <div className="underline"></div>            
            </Title>
          </Container>
            


          <ProjectCard
  logoSrc="/assets/img/exp-zhiffy-logo-1.webp"
  projectLink="https://www.zhiffy.com/"
  projectName="Zhiffy"
  role="Software Engineer"
  responsibilities={[
    "Developed and managed the backend of an e-commerce platform using Flask, MongoDB, and AWS.",
    "Worked on three web applications targeting customers, selling vendors, and admin users; built 50+ RESTful APIs with functionalities...",
    "Improved the response time by 20% by refactoring the codebase and changing database design and queries.",
    "Added a bulk upload feature which reduced the manual work of adding products into a database.",
  ]}
  tools="Python, Flask, MongoDB"
  duration="July 2020 - Nov 2020"
  location="Hyderabad, India"
/>
          <ProjectCard
  logoSrc="/vite.svg"
  projectLink="https://www.zhiffy.com/"
  projectName="Zhiffy"
  role="Software Engineer"
  responsibilities={[
    "Developed and managed the backend of an e-commerce platform using Flask, MongoDB, and AWS.",
    "Worked on three web applications targeting customers, selling vendors, and admin users; built 50+ RESTful APIs with functionalities...",
    "Improved the response time by 20% by refactoring the codebase and changing database design and queries.",
    "Added a bulk upload feature which reduced the manual work of adding products into a database.",
  ]}
  tools="Python, Flask, MongoDB"
  duration="July 2020 - Nov 2020"
  location="Hyderabad, India"
/>









          </Container>
      </StyledAboutMe>
    </>
    )
}


export default Experience
