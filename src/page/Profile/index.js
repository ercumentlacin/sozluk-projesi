import { Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext ";
import { StyledSection } from "./style";
const Profile = () => {
  const { favWords, searchHistory } = useContext(ThemeContext);
  const [isFav, setIsFav] = useState(true);

  const showFav = (e) => {
    return !isFav ? setIsFav(true) : null;
  };
  const showHistory = (e) => {
    return isFav ? setIsFav(false) : null;
  };

  /*useEffect(() => {
    const localData = localStorage.getItem("searchHistory");
    return localData ? JSON.parse(localData) : [];
  }, []);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);*/

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
            favWords?.map(({ madde }, index) => {
              return (
                <h3 key={index}>
                  <Link to={`/kelime/${madde}`}>{madde}</Link>
                </h3>
              );
            })
          ) : (
            <>
              {searchHistory?.map(({ madde }, index) => {
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
