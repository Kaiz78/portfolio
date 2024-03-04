import styled from "styled-components";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import {translate} from "../i18n";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

import { useForm, ValidationError } from '@formspree/react';

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
  
  const {language} = useSelector((state: RootState) => state.lang);  
  let content = translate('page', language) as any

 


    return (
    <>
         <StyledAboutMe className="section">
        <div>
          <div className="d-flex">
            <Title>
              <h2>{content.contact.title}</h2>
              <div className="underline"></div>            
            </Title>
          </div>
          <div className="card  mx-auto w-75 ">
          <ContactForm /> 

            <div className="container text-center">
              <br />
              <br />
                <hr className="underline"/>
                <h4>{content.contact.social}</h4>
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





function ContactForm() {
  const [state, handleSubmit] = useForm("xeqykynd");

  const {language} = useSelector((state: RootState) => state.lang);  
  let content = translate('page', language) as any

  if (state.succeeded) {
      return <p className="text-center">{content.contact.msg_4}</p>;
  }
  return (
    <div className="container">
    <h4 className="text-center">{content.contact.mail}</h4>
    <form onSubmit={handleSubmit} className="row justify-content-center">
      <div className="mb-3 form-floating">
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="Email"
          className="form-control rounded"
        />
          <label htmlFor="email" className="form-label mx-2">{content.contact.msg_1}</label>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      
      <div className="mb-3 form-floating">
        <textarea
          id="message"
          name="message"
          className="form-control"
          placeholder="Message"
        />
        <label htmlFor="message"  className="form-label mx-2">{content.contact.msg_2}</label>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" className="btn btn-primary w-25" disabled={state.submitting}>
      {content.contact.msg_3}
      </button>
    </form>
  </div>
  );
}


export default Contact
