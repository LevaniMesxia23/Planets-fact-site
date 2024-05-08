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

export const MyContext = React.createContext({isMobile:false, isTablet:false, isDesktop:false})


function App() {
  const isMobile = useMediaQuery("only screen and (max-width : 375px)");
  const isTablet = useMediaQuery(
    "only screen and (min-width : 768px) and (max-width : 1440px)"
  );
  const isDesktop = useMediaQuery(
    "only screen and (min-width : 1400px)"
  );
  return (
    <>
    <MyContext.Provider value={{isMobile, isTablet, isDesktop}}>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to={'/earth'}/>}></Route>
          <Route path={'/:planet'} element={<Planets />}/>
        </Routes>
      </Router>

    </MyContext.Provider>
    </>
  );
}

export default App;
