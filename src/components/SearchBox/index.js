import React, { useEffect, useState, useContext } from "react";
import ThemeContext from "../../context/ThemeContext ";
import { Input } from "antd";

const SearchBox = () => {
  const { word, setWord, setResults } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://www.sozluk.gov.tr/gts?ara=${word}`)
      .then((res) => res.json())
      .then(
        (res) => setResults(res),
        (err) => console.log(err)
      );
  }, [word]);

  const { Search } = Input;
  const onSearch = (value) => setWord(value);

  return (
    <div>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </div>
  );
};

export default SearchBox;
