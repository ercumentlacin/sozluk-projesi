import React, { useEffect, useContext } from "react";
import { StyledDıv } from "./style";
import { Row, Col, Divider, Typography } from "antd";
import ThemeContext from "../../context/ThemeContext ";
import { useHistory } from "react-router-dom";

const SearchResult = () => {
  const { results, setResults } = useContext(ThemeContext);
  const { Title } = Typography;

  let history = useHistory();
  const thisWord = history.location.pathname.slice(8);

  useEffect(() => {
    if (results.length) {
      async function fetchData() {
        const response = await fetch(
          `https://www.sozluk.gov.tr/gts?ara=${results}`
        );
        const jsonData = await response.json();
        setResults(jsonData);
        fetchData();
      }
    } else {
      async function fetchData() {
        const response = await fetch(
          `https://www.sozluk.gov.tr/gts?ara=${thisWord}`
        );
        const jsonData = await response.json();
        setResults(jsonData);
        fetchData();
      }
    }
  }, [results, thisWord]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <StyledDıv>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 20, offset: 2 }}>
          <Divider />
          <Title level={5}>
            {results.length ? (
              <p>{capitalizeFirstLetter(results[0]?.madde)}</p>
            ) : (
              "hata"
            )}
          </Title>
        </Col>
      </Row>
    </StyledDıv>
  );
};

export default SearchResult;
