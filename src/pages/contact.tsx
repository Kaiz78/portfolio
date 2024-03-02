import styled from "styled-components";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

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


function Contact()  {    
    return (
    <>
         <StyledAboutMe className="section">
        <div>
          <div className="d-flex">
            <Title>
              <h2>Contact</h2>
              <div className="underline"></div>            
            </Title>
          </div>
          <div className="card  mx-auto w-75 ">
            <div className="container text-center">
                <div className="social-icons d-flex justify-content-center gap-4">
                    <div className="d-flex-reverse">
                        <a href="https://www.linkedin.com/in/amine-mokhtari-986114213/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={40} />
                        <p>
                            LinkedIn
                        </p>
                        </a>
                    </div>
                    <div className="">
                        <a href="https://github.com/Kaiz78" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={40} />
                        <p>
                            GitHub
                        </p>
                        </a>
                    </div>
                    <div className="">
                        <a href="mailto:amine.78mok@gmail.com">
                        <FaEnvelope size={40} />
                        <p>
                            Mail
                        </p>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </StyledAboutMe>
    </>
    )
}


export default Contact
