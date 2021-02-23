import React, { useEffect, useContext } from "react";
import ThemeContext from "../../context/ThemeContext ";
import { Link, useHistory } from "react-router-dom";
import { StyledNavigationBottom } from "./styles";
import { SearchOutlined } from "@ant-design/icons";

const NavigationBottom = () => {
  let history = useHistory();
  const { word, setWord, newWord, setNewWord, setResults } = useContext(
    ThemeContext
  );

  useEffect(() => {
    fetch(`https://www.sozluk.gov.tr/gts?ara=${word}`)
      .then((res) => res.json())
      .then(
        (res) => setResults(res),
        (err) => console.log(err)
      );
  }, [word]);

  const handleChange = (e) => {
    setNewWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWord(newWord);
    history.push(`/kelime/${newWord}`);
  };

  console.log("word", word);
  console.log("newWord", newWord);

  return (
    <StyledNavigationBottom>
      <div className="logo">
        <h1>
          <Link to="/">
            <span>Türkçe</span>
            <span>Sözlük</span>
          </Link>
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="search__input">
          <input
            onChange={handleChange}
            type="search"
            name="search"
            placeholder="Kelime ara"
            value={newWord}
          />
          <SearchOutlined />
        </div>
        <button onSubmit={handleSubmit} type="submit">
          Ara
        </button>
      </form>
    </StyledNavigationBottom>
  );
};

export default NavigationBottom;
