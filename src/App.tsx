import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import { useMediaQuery } from "@uidotdev/usehooks";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createContext, useContext } from 'react';
import GlobalStyles from "./styles/GlobalStyles";
import Planets from "./components/Planets";
import React from "react";
import { useState } from "react";

export const MyContext = React.createContext<{
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  images: string | undefined;
  setImages: React.Dispatch<React.SetStateAction<string>>;
}>({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  images: '',
  setImages: () => {}
});



function App() {
  
  const isMobile = useMediaQuery("only screen and (max-width : 375px)");
  const isTablet = useMediaQuery(
    "only screen and (min-width : 768px) and (max-width : 1440px)"
  );
  const isDesktop = useMediaQuery(
    "only screen and (min-width : 1400px)"
  );
  const [images, setImages] = useState("overview");
  return (
    <>
    <MyContext.Provider value={{isMobile, isTablet, isDesktop, images, setImages}}>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to={'/Earth'}/>}></Route>
          <Route path={'/:planet'} element={<Planets />}/>
        </Routes>
      </Router>

    </MyContext.Provider>
    </>
  );
}

export default App;
