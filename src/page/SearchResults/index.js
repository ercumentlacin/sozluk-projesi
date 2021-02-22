import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext ";
import { useParams } from "react-router-dom";
import { StyledSection } from "./style";
import AtaturkImage from "../../assets/ataturk.png";
// Components
import { Row, Col, Result, Button } from "antd";
import HeadingTitle from "../../components/HeadingTitle";

const SearchResults = () => {
  const { results, setResults } = useContext(ThemeContext);
  let { slug } = useParams();
  let history = useHistory();

  const uniqueWord = history.location.pathname.slice(8);

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

  console.log({ results, uniqueWord });
  return (
    <StyledSection>
      <Row>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={title ? { span: 14, offset: 2 } : { span: 20, offset: 2 }}
        >
          <Link to={history.location.pathname}>
            <HeadingTitle title={title} />
          </Link>

          {results?.length ? (
            <>
              {results[0].anlamlarListe?.map((kelime, index) => {
                return (
                  <p key={index}>
                    <strong>{index + 1}.Anlam: </strong>
                    {kelime.anlam}
                  </p>
                );
              })}
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
