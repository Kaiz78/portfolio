import styled from "styled-components";
import { FaRegFilePdf } from "react-icons/fa";
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
    return (
    <>
         <StyledAboutMe className="section">
        <div>
          <div className="d-flex">
            <Title>
              <h2>CV</h2>
              <div className="underline"></div>            
            </Title>
          </div>
          <div className="d-flex flex-column text-center p-5">
              <div className="card">
                <div className="text-center">
                    <a href="/vite.svg" target="_blank" >
                        <FaRegFilePdf  fontSize={44}/>
                    </a>
                    <br />
                    <br />
                    <p>Cliquez pour téléchargez mon CV</p>
                </div>
              </div>
          </div>
        </div>
      </StyledAboutMe>
    </>
    )
}


export default CV
