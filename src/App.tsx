import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Planets from "./components/Planets";
import React from "react";
import { useState } from "react";

export const MyContext = React.createContext<{
  images: string | undefined;
  setImages: React.Dispatch<React.SetStateAction<string>>;
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  images: '',
  setImages: () => {},
  clicked: false,
  setClicked: () => {}
});

function App() {
  const [clicked, setClicked] = useState(false)
  const [images, setImages] = useState("overview");
  return (
    <>
    <MyContext.Provider value={{images, setImages,clicked,setClicked}}>
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
