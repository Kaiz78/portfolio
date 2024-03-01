import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import ProjectCard from "../components/projectCard";


const StyledAboutMe = styled.section`

  margin-bottom: 10rem;
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



function Experience()  {    
    return (
    <>

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
