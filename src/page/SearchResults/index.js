import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext ";
import { useParams } from "react-router-dom";
import { StyledSection } from "./style";
// Components
import { Row, Col } from "antd";
import HeadingTitle from "../../components/HeadingTitle";

const SearchResults = () => {
  const { results, setResults } = useContext(ThemeContext);
  let { slug } = useParams();
  let history = useHistory();

  useEffect(() => {
    const word = history.location.pathname.slice(8);
    async function fetchData() {
      const response = await fetch(`https://www.sozluk.gov.tr/gts?ara=${word}`);
      const jsonData = await response.json();
      setResults(jsonData);
    }
    fetchData();
  }, [history]);

  console.log(results[0]?.anlamlarListe[0]?.anlam);
  const title =
    results[0]?.madde?.slice(0, 1).toUpperCase() +
    results[0]?.madde?.slice(1, results[0]?.madde?.length);

  return (
    <StyledSection>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 20, offset: 2 }}>
          <HeadingTitle title={title} />
          {results.length ? (
            <p>{results[0]?.anlamlarListe[0]?.anlam}</p>
          ) : (
            "hata"
          )}
        </Col>
      </Row>
    </StyledSection>
  );
};

export default SearchResults;
