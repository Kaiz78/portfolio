import styled from "styled-components";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import { selectData } from "../store/reducers/homeSlice";
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





function Home()  {  
  const {language} = useSelector((state: RootState) => state.lang);  
  let content = translate('page', language) as any

  const { avatar_url, name } = useSelector(selectData);
  const ROUTE = import.meta.env.VITE_ROUTE;

  
  return (
    <>
      <StyledAboutMe className="section">
        <div className="container">
          <div className="container d-flex">
            <Title>
              <h2>{content.home.title}</h2>
              <div className="underline"></div>            
            </Title>
          </div>
          <div className="p-2 align-items-center mt-5 ">
            <div className="card-home text-center">
              <div>
                <a className="opacity-hover" href="https://github.com/Kaiz78">
                  <img
                    src={avatar_url}
                    alt="GitHub Avatar"
                    loading="lazy"
                    className="mx-auto rounded-circle float-left"
                    style={{ width: "100%", height: "100%", maxWidth: "350px" }} />
                </a>
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
                }>{content.home.msg_1}<span className="wave ">👋</span></p>
                <p>{content.home.msg_2} {name}</p>
                <p>{content.home.msg_3}&nbsp;  
                  <span>
                     <TypeAnimation
                        key={content.home.role?.join('_')}
                         sequence={content.home.role?.flatMap((role:string, index:number) => [role, index < content.home.role.length - 1 ? 3000 : 0]) || []}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{display: 'inline-block' }}/>
                  </span>
                </p>

                <div className="d-flex gap-3 justify-content-center">
                    <Link to={`${ROUTE}/about`}>
                      <button className="btn"><span className='text-white'>{content.home.msg_4}</span></button>
                    </Link>
                    <Link to={`${ROUTE}/contact`}>
                      <button className="btn "><span className='text-white'>{content.home.msg_5}</span></button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
<div>




</div>

        </div>
      </StyledAboutMe>
    </>
    )
}


export default Home
