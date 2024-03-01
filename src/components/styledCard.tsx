import React from "react";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Media
import GH from "../assets/GH.svg";
// Components
import { Card } from "react-bootstrap";

const StyledCardComponent = styled.div`
  .card {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(255 255 255 / 0.2)"};

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--primary);
      }
    }

    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
    }
  }
`;

export default function StyledCard({ image, name, description, url, demo }: { image: string, name: string, description: string, url: string, demo: string }) {
  return (

      <div className="">
        <img src={image} alt={name} />
        <div>
            <h3 className='text-center'>{name}</h3>
            <div className='underline-2'></div>
            {
              description && (
                  <p className="card-body"
                  >{description}</p>

              ) || (
                    <p className="card-body"
                    >Pas de description</p>
              )
            }
            <div className='d-flex justify-content-center'>
                <a href={url} target="_blank" rel="noreferrer" className='btn btn-primary'>
                    Voir
                </a>
            </div>
        </div>
      </div>


  );
}
