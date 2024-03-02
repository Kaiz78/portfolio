import styled from "styled-components";
import { FaRegFilePdf } from "react-icons/fa";

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


function CV()  {   
  
  const {language} = useSelector((state: RootState) => state.lang);
  let content = translate('page', language) as any

    return (
    <>
         <StyledAboutMe className="section">
        <div>
          <div className="d-flex">
            <Title>
              <h2>{content.cv.title}</h2>
              <div className="underline"></div>            
            </Title>
          </div>
          <div className="d-flex flex-column text-center">
              <div className="card mx-auto w-75">
                <div className="text-center">
                    <a href="/cv.pdf" target="_blank" >
                        <FaRegFilePdf  fontSize={44}/>
                    <br />
                    <br />
                    <p className="text-decoration-none">{content.cv.msg_1}</p>
                    </a>
                </div>
              </div>
          </div>
        </div>
      </StyledAboutMe>
    </>
    )
}


export default CV
