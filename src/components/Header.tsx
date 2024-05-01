import React from "react";
import styled from "styled-components";
import data from "../../starter-code/data.json";

interface Planet {
  [x: string]: any;
  name: string;
}

export default function Header() {
  const planet: Planet[] = data;
  return (
    <Container>
      <span className="the-planets">THE PLANETS</span>
      <nav>
        <ul>
          {planet.map((planet, index) => (
            <li key={index}>{planet.name}</li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.37rem 2.56rem;
  border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.2);

  .the-planets {
    color: #fff;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.06563rem;
    text-transform: uppercase;
    font-family: "Antonio", sans-serif;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 2.06rem;
    list-style-type: none;

    li {
      color: #fff;
      font-family: Spartan, sans-serif;
      font-size: 0.6875rem;
      font-style: normal;
      font-weight: 700;
      line-height: 227.273%;
      letter-spacing: 0.0625rem;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`;
