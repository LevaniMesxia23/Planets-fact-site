import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Planets from "./components/Planets";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path={'/:id'} element={<Planets />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
