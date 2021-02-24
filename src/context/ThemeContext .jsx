import React, { useState, useEffect, createContext, useReducer } from "react";
import { favWordsReducer } from "../reducers/favWordsReducer";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [word, setWord] = useState("");
  const [newWord, setNewWord] = useState("");
  const [results, setResults] = useState("");

  const [searchHistory, setSearchHistory] = useState([]);

  const [favWords, dispatch] = useReducer(favWordsReducer, [], () => {
    const localData = localStorage.getItem("favWords");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("favWords", JSON.stringify(favWords));
  }, [favWords]);

  const value = {
    word,
    setWord,
    results,
    setResults,
    newWord,
    setNewWord,
    dispatch,
    favWords,
    searchHistory,
    setSearchHistory,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
