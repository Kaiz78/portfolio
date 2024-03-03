
import styled from "styled-components";
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





function About()  {
  const {language} = useSelector((state: RootState) => state.lang);  
  let content = translate('page', language) as any    
    return (
    <>
         <StyledAboutMe className="section">
        <div>
          <div className="d-flex">
            <Title>
              <h2>{content.about.title}</h2>
              <div className="underline"></div>            
            </Title>
          </div>
          <div className="d-flex flex-column text-center p-2">
              <div>
                <p>{content.about.msg_1}</p>
              </div>
              <p className="text-end text-muted font-italic">{content.about.msg_2}</p>

          </div>
        </div>
      </StyledAboutMe>
    </>
    )
}


export default About
