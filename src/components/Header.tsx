import { useContext, useState } from "react";
import styled from "styled-components";
import data from "../../starter-code/data.json";
import Burger from "../../public/assets/icon-hamburger.svg";
import { Link } from "react-router-dom";
import { MyContext } from "../App";

interface Planet {
  [x: string]: any;
  name: string;
}

interface ContainerProps {
  isOpen: boolean;
  planetClick: boolean;
  setPlanetClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header() {
  const { clicked, setClicked } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(true);
  const [planetClick, setPlanetClick] = useState(false);

  const planets: Planet[] = data;
  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };
  const handlePlanetClick = () => {
    setIsOpen(!isOpen);
    setClicked(!clicked);
  };

  const handleDesktopPlanet = () => {
    setPlanetClick(!planetClick);
  };

  return (
    <Container isOpen={isOpen} planetClick={planetClick}>
      <div className="header-box">
        <span className="the-planets">THE PLANETS</span>
        <img src={Burger} alt="burger" onClick={handleBurgerClick} />
        <ul className="ul-2">
          {planets.map((planet, index) => (
            <Link to={`/${planet.name}`} key={index}>
              <div>
                <li
                  onClick={handleDesktopPlanet}
                  className={planetClick ? "active" : ""}
                >
                  {planet.name}
                </li>
              </div>
            </Link>
          ))}
        </ul>
      </div>

      <ul className="ul-1">
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

    img {
      cursor: pointer;
    }
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

  .ul-1 {
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

    a {
      text-decoration: none;
    }

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
        cursor: pointer;
      }
    }
  }
  .ul-2 {
    display: none;
    a {
      text-decoration: none;
    }
  }
  @media (min-width: 797px) {
    .header-box {
      display: flex;
      flex-direction: column;
      align-items: unset;
      gap: 2.44rem;
      padding: 2.44rem 3.31rem 1.69rem;

      .the-planets {
        text-align: center;
      }

      .ul-2 {
        display: flex;
        justify-content: space-between;

        li {
          color: #fff;
          font-size: 0.6875rem;
          font-style: normal;
          font-weight: 700;
          line-height: 227.273%;
          letter-spacing: 0.0625rem;
          text-transform: uppercase;
          list-style-type: none;
          opacity: 0.7;
          position: relative;

          li.active {
            content: "";
            height: 3px;
            width: 100%;
            background-color: red;
            position: absolute;
            left: 0;
            top: -2.25rem;
            opacity: 0;
            transition: all 0.4s;
          }
        }
      }

      img {
        display: none;
      }
    }

    svg {
      display: flex;
    }
  }

  @media (min-width: 1440px) {
    .header-box {
      flex-direction: row;

      ul {
        gap: 2.06rem;
        li {
          cursor: pointer;
          position: relative;
        }
        li:hover,
        li:focus {
          opacity: 1;
        }
        li::after {
          content: "";
          height: 3px;
          width: 100%;
          background-color: ${(props) => props.color};
          position: absolute;
          left: 0;
          bottom: -2.25rem;
          opacity: 0;
        }
        li:hover::after,
        li:focus::after {
          opacity: 1;
        }
      }
    }
  }
`;
