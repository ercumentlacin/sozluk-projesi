import { Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext ";
import { StyledSection } from "./style";
const Profile = () => {
  const { favWords, searchHistory, dispatch, dispatch2 } = useContext(
    GlobalContext
  );
  const [isFav, setIsFav] = useState(true);

  const showFav = (e) => {
    return !isFav ? setIsFav(true) : null;
  };
  const showHistory = (e) => {
    return isFav ? setIsFav(false) : null;
  };

  const favReset = (e) => {
    alert("Favorileri listeniz resetlenmiştir!");
    dispatch({
      type: "RESET_FAV",
      favWords: [],
    });
  };
  const historyReset = (e) => {
    alert("Arama geçmişiniz silinmiştir!");
    dispatch2({
      type: "RESET_History",
      searchHistory: [],
    });
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
            <button onClick={favReset}>Favorileri sil</button>
          ) : (
            <button onClick={historyReset}>Geçmişi sil</button>
          )}
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
            <div className="search_history__links">
              {searchHistory
                ?.slice(0)
                .reverse()
                .map(({ madde }, index) => {
                  return (
                    <span key={index}>
                      <Link to={`/kelime/${madde}`}>{madde}</Link>
                    </span>
                  );
                })}
            </div>
          )}
        </Col>
      </Row>
    </StyledSection>
  );
};

export default Profile;
