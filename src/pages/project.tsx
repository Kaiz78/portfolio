import React, {useState, useEffect} from 'react'
import { filteredProjects } from "../services/data";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";
import {
    selectData,
    selectError,
    selectIsLoading,
  } from "../services/allProjectsSlice";


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


function Project()  {    

    const [mainProjects, setMainProjects] = useState<any[]>([]);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const data = useSelector(selectData);

    useEffect(
        function () {
            const tempData: any[] = [];
            console.log(data)
            data.forEach((el, i) => (tempData[i] = Object.create(el)));
            if (data.length !== 0 && filteredProjects.length !== 0) {
                const tempArray = tempData.filter((obj) =>
                    filteredProjects.includes(obj.name)
                );
                tempArray.length !== 0
                    ? setMainProjects(tempArray)
                    : setMainProjects(tempData.slice(0, 3));
            } else {
                setMainProjects(tempData.slice(0, 3));
            }
        },
        [data]
      );
    return (
    <>
        <StyledAboutMe className="section">
            <div className='container'>
                <div className="d-flex container">
                    <Title>
                    <h2>Projet</h2>
                    <div className="underline"></div>            
                    </Title>
                </div>
                <div>
            
            <div>
            {isLoading && (
                <div className="d-flex">
                    {/* Utilisez ici votre composant Loading personnalisé */}
                </div>
            )}
            {error && <h2 className="text-center">{error}</h2>}
            {!error && data.length === 0 && (
                <h2 className="text-center">
                    Oops, you do not have any GitHub projects yet...
                </h2>
            )}
            {mainProjects.length !== 0 && (
                <>
                    <div className="row gap-2  justify-content-center">
                        {mainProjects.map(function ({
                            id,
                            image,
                            name,
                            description,
                            html_url,
                            homepage,
                        }) {
                            return (
                                <div key={id} className=" card p-3  col-md-4">
                                    <div>
                                        <img src={image} alt={name} />
                                        <div>
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <button >GitHub</button>
                                            {homepage && (
                                                <button >Demo</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {data.length > 3 && (
                        <div className="text-center mt-5">
                            <Link to="/All-Projects">
                                <button>
                                    All Projects
                                </button>
                            </Link>
                        </div>
                    )}
                    <br />
                    <br />
                    <br />
                </>
            )}
        </div>
        </div>
            </div>
        </StyledAboutMe>
        
    </>
    )
}


export default Project
