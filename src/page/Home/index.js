import React, { useContext } from "react";
import Logo from "../../components/Logo";
import SearchBox from "../../components/SearchBox";
import ThemeContext from "../../context/ThemeContext ";
import { StyledSection } from "./style";
import { Row, Col } from "antd";
import SearchResult from "../../components/SearchResult";

const Home = () => {
  const { theme, results } = useContext(ThemeContext);
  console.log(results);

  return (
    <StyledSection>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 20, offset: 2 }}>
          <Row align="middle">
            {/* logo */}
            <Col
              xs={{ align: "middle", span: 2, offset: 1 }}
              sm={{ align: "middle", span: 4, offset: 0 }}
            >
              <Logo />
            </Col>
            {/* search input */}
            <Col
              align="middle"
              xs={{ span: 18, offset: 1 }}
              sm={{ span: 16, offset: 1 }}
            >
              <SearchBox />
            </Col>
          </Row>
        </Col>
      </Row>
      {/* search Result */}
      <SearchResult />
    </StyledSection>
  );
};

export default Home;
