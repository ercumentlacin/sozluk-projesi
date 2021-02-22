import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext ";
import { StyledSection } from "./style";
import SearchResult from "../../components/SearchResult";

const Home = () => {
  const { theme, results } = useContext(ThemeContext);
  console.log(results);

  return (
    <StyledSection>
      {/* search Result */}
      <SearchResult />
    </StyledSection>
  );
};

export default Home;
