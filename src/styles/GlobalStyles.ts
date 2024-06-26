import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "League Spartan", sans-serif;
}
body{
  background: #070724;
  background-image: url(/assets/background-stars.svg);
  background-position: center;
  background-size: cover;
  position: relative;
}
`;
export default GlobalStyles;
