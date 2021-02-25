import { Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext ";
import { StyledSection } from "./style";
const Profile = () => {
  const { favWords, searchHistory } = useContext(GlobalContext);
  const [isFav, setIsFav] = useState(true);

  const showFav = (e) => {
    return !isFav ? setIsFav(true) : null;
  };
  const showHistory = (e) => {
    return isFav ? setIsFav(false) : null;
  };

  console.log({ geçmiş: searchHistory });

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
            favWords
              ?.slice(0)
              .reverse()
              .map(({ madde }, index) => {
                return (
                  <h3 key={index}>
                    <Link to={`/kelime/${madde}`}>{madde}</Link>
                  </h3>
                );
              })
          ) : (
            <>
              {searchHistory
                ?.slice(0)
                .reverse()
                .map(({ madde }, index) => {
                  return (
                    <h4 key={index}>
                      <Link to={`/kelime/${madde}`}>{madde}</Link>
                    </h4>
                  );
                })}
            </>
          )}
        </Col>
      </Row>
    </StyledSection>
  );
};

export default Profile;
