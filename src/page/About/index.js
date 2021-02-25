import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext ";
import { StyledSection } from "./style";
import { Row, Col } from "antd";

import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";
import ErcuImage from "../../assets/ercument.jpg";
import IsoImage from "../../assets/ismail.jpg";

const About = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <StyledSection>
      <div>
        <div>
          <h1 className="title">BİZİMLE TANIŞIN</h1>
          <span></span>
        </div>
        <div>
          <Row className="content-div">
            <Col xs={24} sm={12} md={8} lg={6}>
              <img src={`${ErcuImage}`} alt="Ercument Lacin" />
              <h2>Ercüment Laçın</h2>
              <h3>Front end developer</h3>
              <div>
                <a
                  href="https://www.linkedin.com/in/ercument-lacin/"
                  rel="ercument-lacin"
                  target="_blank"
                >
                  <LinkedinOutlined />
                </a>
                <a
                  href="https://github.com/ercumentlacin"
                  rel="ercument-lacin"
                  target="_blank"
                >
                  <GithubOutlined />
                </a>
                <a
                  href="mailto:ercument.lacin@gmail.com"
                  rel="ercument-lacin"
                  target="_blank"
                >
                  <MailOutlined />
                </a>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <img src={`${IsoImage}`} alt="Ismail Hanadi" />
              <h2>Ismail Hanadi</h2>
              <h3>Front end developer</h3>
              <div>
                <a
                  href="https://www.linkedin.com/in/ihanadi"
                  rel="ismail-hanadi"
                  target="_blank"
                >
                  <LinkedinOutlined />
                </a>
                <a
                  href="https://github.com/ihanadi"
                  rel="ismail-hanadi"
                  target="_blank"
                >
                  <GithubOutlined />
                </a>
                <a
                  href="mailto:ismailhanadi96@gmail.com"
                  rel="ismail-hanadi"
                  target="_blank"
                >
                  <MailOutlined />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </StyledSection>
  );
};

export default About;
