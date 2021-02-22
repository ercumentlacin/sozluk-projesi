import React, { useEffect, useContext } from "react";
import { StyledDıv } from "./style";
import { Row, Col, Typography } from "antd";
import ThemeContext from "../../context/ThemeContext ";

const SearchResult = () => {
  const { results, setResults } = useContext(ThemeContext);
  const { Title } = Typography;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://www.sozluk.gov.tr/gts?ara=${results}`
      );
      const jsonData = await response.json();
      setResults(jsonData);
    }
    fetchData();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  console.log("SearchResult => " + results);

  return (
    <StyledDıv>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 20, offset: 2 }}>
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
