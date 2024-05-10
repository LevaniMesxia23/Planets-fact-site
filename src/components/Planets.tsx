import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../starter-code/data.json";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../App";

interface Planet {
  name: string;
  viewOption: {
    overview: {
      content: string;
      source: string;
    };
    structure: {
      content: string;
      source: string;
    };
    geology: {
      content: string;
      source: string;
    };
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
  design: {
    color: string;
    overview_mobile: string;
    overview_tablet: string;
    overview_desktop: string;
  };
  surface: {
    top: string;
  }
}

interface Params {
  planet: string | undefined;
}

export default function Planets() {
  const { images, setImages } =
    useContext(MyContext);
  const params = useParams<Params>();
  const planetName = params.planet;

  const planet: Planet | undefined = data.find(
    (object) => object.name === planetName
  );

  console.log(planet);
  const handleOverview = () => {
    setImages("overview");
  };

  const handleStructure = () => {
    setImages("structure");
  };

  const handleGeology = () => {
    setImages("geology");
  };

  return (
    <>
      <Container color={planet?.design.color} >
        <div className="header-box">
          <span onClick={handleOverview}>OVERVIEW</span>
          <span onClick={handleStructure}>Structure</span>
          <span onClick={handleGeology}>Surface</span>
        </div>

        <ImageBox>
          <img
            src={
              (images == "structure" && planet?.images.internal) ||
              (images == "geology" && planet?.images.planet) ||
              planet?.images.planet
            }
            alt=""
            style={{ width: planet?.design.overview_mobile }}
          />
          {images === "geology" && (
            <img className="surface-img" src={planet?.images.geology} alt="" />
          )}
        </ImageBox>

        <div className="planet-info">
          <h1>{planet?.name}</h1>
          <span>
            {(images == "structure" && planet?.viewOption.structure.content) ||
              (images == "geology" && planet?.viewOption.geology.content) ||
              planet?.viewOption.overview.content}
          </span>
          <div>
            <span>Source : </span>
            <a href={(images == "structure" && planet?.viewOption.structure.source) ||
              (images == "geology" && planet?.viewOption.geology.source) ||
              planet?.viewOption.overview.source}>Wikipedia</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <BottomBox>
          <div>
            <span className="common-info-title rot-time">ROTATION TIME</span>
            <span className="common-info">{planet?.rotation}</span>
          </div>
          <div>
            <span className="common-info-title rev-time">REVOLUTION TIME</span>
            <span className="common-info">{planet?.revolution}</span>
          </div>
          <div>
            <span className="common-info-title radius">radius</span>
            <span className="common-info">{planet?.radius}</span>
          </div>
          <div>
            <span className="common-info-title ave-temp">AVERAGE TEMP.</span>
            <span className="common-info">{planet?.temperature}</span>
          </div>
        </BottomBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  .header-box {
    display: flex;
    justify-content: space-between;
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    span {
      color: #fff;
      text-align: center;
      font-size: 0.5625rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.12056rem;
      text-transform: uppercase;
      opacity: 0.5;
      position: relative;
      transition: all 0.8s;
    }
    span:hover,
    span:focus {
      opacity: 1;
    }
    span::after {
      content: "";
      height: 3px;
      width: 100%;
      background-color: ${props => props.color};
      position: absolute;
      left: 0;
      bottom: -1.25rem;
      opacity: 0;
      transition: all 0.4s;
    }
    span:hover::after,
    span:focus::after {
      opacity: 1;
    }
  }

  .planet-info {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 0 1.5rem;

    h1 {
      color: #fff;
      text-align: center;
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    span {
      color: #fff;
      font-size: 0.6875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 200%;
    }

    div {
      color: #fff;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 208.333%;
      opacity: 0.5;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      margin-top: 2rem;

      a {
        opacity: 0.5;
        color: #fff;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5625rem;
        text-decoration-line: underline;
      }
    }
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5.94rem;
  margin-bottom: 6.13rem;
  position: relative;

  .surface-img {
    width: 9.29738rem;
    height: 8.125rem;
    flex-shrink: 0;
    position: absolute;

  }
`;

const BottomBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.5rem;
  gap: 1rem;
  margin-top: 1.75rem;
  margin-bottom: 2.76rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 1rem 1.5rem;

    .common-info-title {
      color: #fff;
      font-size: 0.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 200%;
      letter-spacing: 0.04544rem;
      text-transform: uppercase;
      opacity: 0.5;
    }

    .common-info {
      color: #fff;
      text-align: right;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.04688rem;
      text-transform: uppercase;
    }
  }
`;
