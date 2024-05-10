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

  images: string | undefined;
  setImages: React.Dispatch<React.SetStateAction<string>>;
}>({
  images: '',
  setImages: () => {}
});

function App() {

  const [images, setImages] = useState("overview");
  return (
    <>
    <MyContext.Provider value={{images, setImages}}>
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
