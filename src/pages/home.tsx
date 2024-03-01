import styled from "styled-components";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import { useSelector } from "react-redux";
import { selectData } from "../services/homeSlice";


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





function Home()  {    
  

    const { avatar_url, name } = useSelector(selectData);
  
  return (
    <>
      <StyledAboutMe className="section">
        <div className="container">
          <div className="container d-flex">
            <Title>
              <h2>Accueil</h2>
              <div className="underline"></div>            
            </Title>
          </div>
          <div className="p-2 align-items-center mt-5 ">
            <div className="card-home text-center">
              <div>
                <img
                    src={avatar_url}
                    alt="GitHub Avatar"
                    loading="lazy"
                    className="mx-auto rounded-circle float-left"
                    style={{ width: "100%", height: "100%" }} />
              </div>
              <div className="" style={
                  {
                      width: "80%",   
                  }
              }>

                <p className=""
                style={
                  {
                    fontSize: "38px",
                  }
                }
                >Salut, <span className="wave ">👋</span></p>
                <p>Je m'appelle {name}</p>
                <p>Je suis&nbsp;  
                  <span>
                     <TypeAnimation
                    sequence={[
                        'développeur frontend', // Types 'One'
                        2000, // Waits 1s
                        'développeur backend', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'chef de projet', // Types 'Three' without deleting 'Two'
                        3000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{display: 'inline-block' }}/>
                  </span>
                </p>

                <div className="d-flex gap-3 justify-content-center">
                    <Link to="/about">
                      <button className="btn btn-primary">A propos</button>
                    </Link>
                    <Link to="/contact">
                      <button className="btn btn-primary">Contact</button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledAboutMe>
    </>
    )
}


export default Home
