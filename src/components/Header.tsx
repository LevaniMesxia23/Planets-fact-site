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
    console.log(!isOpen);
  };
  return (
    <Container isOpen={isOpen}>
      <div className="header-box">
        <span className="the-planets">THE PLANETS</span>
        <img src={Burger} alt="" onClick={handleBurgerClick} />
      </div>
      <nav>
        <ul>
          {planets.map((planet, index) => (
            <Link to={`/${planet.name}`} className="li-box">
              <div className="circles"></div>
              <li key={index}>{planet.name}</li>
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
      </nav>
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
    top: calc(4.31rem + 1.44rem);
    right: 0;
    width: 100%;
    display: ${(props) => (props.isOpen ? "none" : "flex")};
    justify-content: center;
    background-color: transparent;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    padding: 0 1.5rem;

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
      }

      svg {
      }
    }
  }
`;
