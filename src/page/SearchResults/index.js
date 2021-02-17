import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext ";
import { StyledSection } from "./style";
import { useParams } from "react-router-dom";

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
  return (
    <StyledSection>
      <h1>Arama sonuçları</h1>
      {!results.length ? <p>{results[0]?.anlamlarListe[0]?.anlam}</p> : "hata"}
    </StyledSection>
  );
};

export default SearchResults;
