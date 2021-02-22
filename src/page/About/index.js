import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext ";
import { StyledSection } from "./style";
import { Row, Col } from "antd";
import ErcumentImg from "../../assets/ercument.jpeg";
import IsmailImg from "../../assets/ismail.jpg";


const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledSection>
      <Row>
        <Col  xs={24} sm={{ span: 8 }}>
          <img src={`${ErcumentImg}`} alt="Ercüment Laçin" />
          <div>
            <h1>Ercüment Laçin</h1>
            <p>Front-end Developer</p>
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit   amet, consectetur, adipisci velit..."
              "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            </p>
          </div>
        </Col>
        <Col  xs={24} sm={{ span: 8 }}>
          <img src={`${IsmailImg}`} alt="Ismail Hanadi" />
          <div>
            <h1>Ismail Hanadi</h1>
            <p>Front-end Developer</p>
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit   amet, consectetur, adipisci velit..."
              "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            </p>
          </div>
        </Col>
      </Row>
    </StyledSection>
  );
};

export default About;
