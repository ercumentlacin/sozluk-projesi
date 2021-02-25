import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext ";
import { useParams } from "react-router-dom";
import { StyledSection } from "./style";
import AtaturkImage from "../../assets/ataturk.png";
// Components
import { Row, Col, Result, Button } from "antd";
import HeadingTitle from "../../components/HeadingTitle";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const SearchResults = () => {
  const [isFav, setIsFav] = useState(false);
  const {
    results,
    setResults,
    dispatch,
    favWords,
    searchHistory,
    dispatch2,
  } = useContext(GlobalContext);
  let { slug } = useParams();
  let history = useHistory();

  const uniqueWord = history.location.pathname.slice(8);

  useEffect(() => {
    dispatch2({
      type: "ADD_History",
      searchHistory: {
        madde: uniqueWord,
      },
    });
  }, [uniqueWord]);

  useEffect(() => {
    const word = history.location.pathname.slice(8);
    async function fetchData() {
      const response = await fetch(`https://www.sozluk.gov.tr/gts?ara=${word}`);
      const jsonData = await response.json();
      setResults(jsonData);
    }

    fetchData();
  }, [uniqueWord]);

  const title =
    results[0]?.madde?.slice(0, 1).toUpperCase() +
    results[0]?.madde?.slice(1, results[0]?.madde?.length);

  const handleClick = (e) => {
    if (favWords.every(({ madde }) => madde !== uniqueWord)) {
      dispatch({
        type: "ADD_FAV",
        favWords: {
          madde: uniqueWord,
        },
      });
      setIsFav(true);
    } else {
      dispatch({
        type: "REMOVE_FAV",
        favWords: {
          madde: uniqueWord,
        },
      });
      setIsFav(false);
    }
  };

  return (
    <StyledSection>
      <Row>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={title ? { span: 14, offset: 2 } : { span: 20, offset: 2 }}
        >
          <div className="tittle__fav">
            <Link to={history.location.pathname}>
              <HeadingTitle title={title} />
            </Link>
            {favWords.every(({ madde }) => madde !== uniqueWord) ? (
              <StarOutlined onClick={handleClick} />
            ) : (
              <StarFilled onClick={handleClick} />
            )}
          </div>
          {results?.length ? (
            <>
              {results?.map(
                ({ madde, anlamlarListe, madde_id, kac, birlesikler }) => {
                  return (
                    <div key={madde_id}>
                      <h2>{`${madde} ${kac != 0 ? `(${kac})` : ""}`}</h2>
                      {anlamlarListe?.map(
                        ({ anlam_sira, anlam, anlam_id, ozelliklerListe }) => {
                          return (
                            <p key={anlam_id}>
                              <strong>{`${anlam_sira}. `}</strong>
                              <span>
                                <strong>
                                  {ozelliklerListe ? (
                                    ozelliklerListe?.map(
                                      ({ ozellik_id, tam_adi }) => {
                                        return (
                                          <em key={ozellik_id}>
                                            {`${tam_adi} `}
                                          </em>
                                        );
                                      }
                                    )
                                  ) : (
                                    <em>isim </em>
                                  )}
                                </strong>
                              </span>
                              {anlam}
                            </p>
                          );
                        }
                      )}
                      {birlesikler && (
                        <div className="words__links">
                          <h4>
                            <strong>Benzer Kelimeler:</strong>{" "}
                          </h4>
                          {birlesikler?.split(", ").map((word, index) => {
                            return (
                              <Link key={index} to={`/kelime/${word}`}>
                                {word}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </>
          ) : (
            <Result
              status="404"
              title="404"
              subTitle="Aradığınız kelime sözlüğümüzde yer almıyor."
              extra={
                <Button type="primary">
                  <Link to="/">Anasayfaya geri dön</Link>
                </Button>
              }
            />
          )}
        </Col>
        <Col
          className="ataturk__image"
          xs={{ span: 0 }}
          sm={{ span: 8, offset: 0 }}
        >
          {title ? (
            <img src={`${AtaturkImage}`} alt="Mustafa Kemal Atatürk" />
          ) : null}
        </Col>
      </Row>
    </StyledSection>
  );
};

export default SearchResults;
