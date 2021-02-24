import { Col, Row } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext ";
import { StyledSection } from "./style";
const Profile = () => {
  const { favWords } = useContext(ThemeContext);
  const [isFav, setIsFav] = useState(true);

  const showFav = (e) => {
    return !isFav ? setIsFav(true) : null;
  };

  const showHistory = (e) => {
    return isFav ? setIsFav(false) : null;
  };
  return (
    <StyledSection>
      <Row>
        <Col className="page__nav" sm={{ span: 8, offset: 2 }}>
          <Link onClick={showFav} to="#">
            Favorileriniz
          </Link>
          <Link onClick={showHistory} to="#">
            Arama Geçmişiniz
          </Link>
        </Col>
        <Col sm={{ span: 8, offset: 2 }}>
          {isFav ? (
            favWords?.map(({ madde }, index) => {
              return (
                <h3 key={index}>
                  <Link to={`/kelime/${madde}`}>{madde}</Link>
                </h3>
              );
            })
          ) : (
            <h1>Geçmiş</h1>
          )}
        </Col>
      </Row>
    </StyledSection>
  );
};

export default Profile;
