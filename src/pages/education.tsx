import styled from "styled-components";

import ProjectCard from "../components/projectCard";
import { useSelector } from "react-redux";
import {translate} from "../i18n";
import { RootState } from "../store/store";





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





function Education()  {    

  const {language} = useSelector((state: RootState) => state.lang);
  let content = translate('page', language) as any

  console.log(content.education)

    return (
    <>
         <StyledAboutMe className="section">
        <div className="container">
          <div className="container d-flex">
            <Title>
              <h2>{content.education.title}</h2>
              <div className="underline"></div>            
            </Title>
          </div>
            

          {
            content.education.school.map((school:any, index:number) => {
              return (
                <ProjectCard key={index}
                    logoSrc={school.icon}
                    projectLink={school.projectLink}
                    projectName={school.name}
                    role={school.degree}
                    responsibilities={school.skill}
                    subject={school.subject}
                    tools={school.tools}
                    duration={school.duration}
                    location={school.location}
                />
              )
            })
          }




          </div>
      </StyledAboutMe>
    </>
    )
}


export default Education
