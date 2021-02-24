import React, { useState, useEffect, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [word, setWord] = useState("");
  const [newWord, setNewWord] = useState("");
  const [results, setResults] = useState("");

  const [favWords, setFavWords] = useState([{ madde: "deneme" }]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    localStorage.setItem("favWords", JSON.stringify(favWords));
    localStorage.getItem("favWords");
  }, [favWords]);

  // useEffect(() => {
  //   localStorage.setItem("favWords", JSON.stringify(favWords));
  // });

  const addFavorite = (madde = results) => {
    let deneme = results.map(({ madde }) => madde).toString();
    console.log(deneme);
    setFavWords([...favWords, { madde: deneme }].map((i) => i));
    console.log(favWords);

    alert("Favrilere eklendi");
  };

  console.log(favWords);

  const value = {
    word,
    setWord,
    results,
    setResults,
    newWord,
    setNewWord,
    addFavorite,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
