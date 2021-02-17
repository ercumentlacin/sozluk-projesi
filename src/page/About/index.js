import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext ";
import { StyledSection } from "./style";
const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledSection>
      <h1>About</h1>
    </StyledSection>
  );
};

export default About;
