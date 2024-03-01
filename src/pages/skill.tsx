import styled from "styled-components";

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
interface Subcategory {
    name: string;
    icon: string;
  }
  
  interface Category {
    title?: string;
    name?: string;
    icon?: string;
    subcategories?: Subcategory[];
  }

interface Data {
    languages?: Category[];
    databases?: Category[];
    frameworks?: Category[];
    tools?: Category[];
  }
  


const data: Data = {
    languages: [
      {
        title: "Language et base de donnée",
        name: "Php",
        icon: "/vite.svg",
      },
      {
        title: "Languages",
        name: "Javascript",
        icon: "/vite.svg",
      },
      {
        title: "Languages",
        name: "HTML",
        icon: "/vite.svg",
      },
      {
        title: "Languages",
        name: "CSS",
        icon: "/vite.svg",
      },
      {
        title: "Languages",
        name: "SCSS",
        icon: "/vite.svg",
      },
    ],
    frameworks: [
      {
        title: "Frameworks",
        name: "React",
        icon: "/vite.svg",
      },
    ],
    tools: [
      {
        title: 'Outils',
        name: "Git",
        icon: "/vite.svg",
      },
    ],
  };

function Skill()  {    
    return (
    <>
         <StyledAboutMe className="section">
        <div>
          <div className="d-flex">
            <Title>
              <h2>Compétence</h2>
              <div className="underline"></div>            
            </Title>
          </div>
          <div className="d-flex flex-column text-center p-5">
          {Object.entries(data).map(([categoryKey, subcategories]) => (
          <div key={categoryKey} className="card">
            <h4 className="brown-text light">{subcategories[0].title}</h4>
            <div className="row text-center">
              {(subcategories || []).map((subcategory: Subcategory, subId:any) => (
                <div key={subId} className="col">
                  <img alt="" src={subcategory.icon} className="responsive-img" />
                  <h6 className="heading_h6">{subcategory.name}</h6>
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
