import styled from "styled-components";
import { useSelector } from "react-redux";
import {translate} from "../i18n";
import { RootState } from "../store/store";
import { Icon } from "@iconify/react";





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



function Skill()  {  

  const {language} = useSelector((state: RootState) => state.lang);
  let content = translate('page', language) as any
  console.log(content.skills.skills)
    return (
    <>
         <StyledAboutMe className="section">
        <div>
          <div className="d-flex">
            <Title>
              <h2>{content.skills.title}</h2>
              <div className="underline"></div>            
            </Title>
          </div>
          <div className="d-flex flex-column text-center p-5">
          {Object.entries(content.skills.skills).map(([categoryKey, subcategories] : any) => (
          <div key={categoryKey} className="card">
            <h4 className="brown-text light">{subcategories[0].title}</h4>
            <div className="row text-center">
              {(subcategories || []).map((subcategory: {
                name: string;
                icon: string;
                level: number;
                }, subId:any) => (
                  <div key={subId} className={`col position-relative cursor-pointer ${subcategory.level >= 10 ? 'star-shine' : ''}`}>
                  <div className="position-relative cursor-pointer">
                    {/* Si subcategory.icon JSX eleement */}
                    {typeof subcategory.icon === 'object' ? (
                       
                        <></>
                       ) : (
                      <>
                        <Icon icon={subcategory.icon} fontSize="calc(1.2em + 2vw)" />            
                      </>)}
                  <div className="tooltip">{subcategory.name}</div>
                  </div>
      
                </div>
              ))}
            </div>
          </div>
        ))}
          </div>
        </div>
      </StyledAboutMe>
    </>
    )
}


export default Skill
