import React, { useEffect, useContext } from "react";
import ThemeContext from "../../context/ThemeContext ";
import { Redirect, useHistory } from "react-router-dom";
import { Input } from "antd";

const SearchBox = () => {
  let history = useHistory();
  const { word, setWord, setResults } = useContext(ThemeContext);
  const { Search } = Input;

  useEffect(() => {
    fetch(`https://www.sozluk.gov.tr/gts?ara=${word}`)
      .then((res) => res.json())
      .then(
        (res) => setResults(res),
        (err) => console.log(err)
      );
  }, [word]);

  const onSearch = (value) => {
    setWord(value);
  };
  const handleSubmit = () => history.push(`/kelime/${word}`);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </form>
    </div>
  );
};

export default SearchBox;
