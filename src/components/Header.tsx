import React, { useState } from "react";
import styled from "styled-components";
import data from "../../starter-code/data.json";
import Burger from "../../public/assets/icon-hamburger.svg";
import { Link } from "react-router-dom";

interface Planet {
  [x: string]: any;
  name: string;
}

interface ContainerProps {
  isOpen: boolean;
}

export default function Header() {

  const [isOpen, setIsOpen] = useState(true);

  const planets: Planet[] = data;
  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
    // window.outerHeight = "737px"
  };
  const handlePlanetClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <Container isOpen={isOpen}>
      <div className="header-box">
        <span className="the-planets">THE PLANETS</span>
        <img src={Burger} alt="" onClick={handleBurgerClick} />
      </div>

      <ul>
        {planets.map((planet, index) => (
          <Link
          key={index}
            to={`/${planet.name}`}
            className="li-box"
            onClick={handlePlanetClick}
          >
            <div className="circles-li">
              <div
  
                className="circles"
                style={{ backgroundColor: planet.design.color }}
              ></div>
              <li key={index}>{planet.name}</li>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
            >
              <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white" />
            </svg>
          </Link>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div<ContainerProps>`
  .header-box {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.2);
    min-width: 250px;
    width: 100%;
  }
  .the-planets {
    color: #fff;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.06563rem;
    text-transform: uppercase;
  }

  ul {
    position: absolute;
    padding-top: calc(4.31rem + 1.44rem);
    right: ${(props) => (props.isOpen ? "100%" : "0")};
    transition: right 0.5s ease;
    width: 100%;
    display: flex;
    background-color: rgb(7, 7, 36, 0.7);
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    padding: 0 1.5rem;
    z-index: 1;
    height: 100%;
    backdrop-filter: blur(5px);
    padding-top: 1.5rem;

    .circles-li {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
    }

    .li-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.1);

      .circles {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
      }

      li {
        padding: 1.44rem 0 1.44rem;
        color: #fff;
        text-align: center;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 700;
        line-height: 166.667%;
        letter-spacing: 0.08525rem;
        text-transform: uppercase;
        text-decoration: none !important;
      }

      svg {
      }
    }
  }
`;
