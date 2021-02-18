import React, { useContext } from "react";
import Logo from "../../components/Logo";
import SearchBox from "../../components/SearchBox";
import ThemeContext from "../../context/ThemeContext ";
import { StyledSection } from "./style";
import { Row, Col, Space } from "antd";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledSection>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 20, offset: 2 }}>
          <Row align="middle">
            {/* logo */}
            <Col xs={{ span: 2, offset: 1 }} sm={{ span: 4, offset: 2 }}>
              <Logo />
            </Col>
            {/* search input */}
            <Col xs={{ span: 16, offset: 1 }} sm={{ span: 12, offset: 2 }}>
              <SearchBox />
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledSection>
  );
};

export default Home;
