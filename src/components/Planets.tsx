import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../starter-code/data.json";

export default function Planets() {
  const params = useParams();
  const planetName = params.planet;
  console.log(planetName);

  const planet = data.find((object) => object.name === planetName);

  console.log(planet);

  return <H></H>;
}

const H = styled.h1`
  color: white;
`;
