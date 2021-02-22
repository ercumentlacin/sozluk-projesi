import React, { useContext } from "react";
import Logo from "../../components/Logo";
import SearchBox from "../../components/SearchBox";
import ThemeContext from "../../context/ThemeContext ";
import { StyledSection } from "./style";
import { Row, Col } from "antd";
import SearchResult from "../../components/SearchResult";

const Home = () => {
  const { theme, results } = useContext(ThemeContext);

  return (
    <StyledSection>
      {/* search Result */}
      <SearchResult />
    </StyledSection>
  );
};

export default Home;
