import React, { useState, useEffect, createContext, useReducer } from "react";
import { favWordsReducer } from "../reducers/favWordsReducer";
import { searchHistoryReducer } from "../reducers/searchHistoryReducer";

const GlobalContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [word, setWord] = useState("");
  const [newWord, setNewWord] = useState("");
  const [results, setResults] = useState("");

  const [favWords, dispatch] = useReducer(favWordsReducer, [], () => {
    const localData = localStorage.getItem("favWords");
    return localData ? JSON.parse(localData) : [];
  });

  const [searchHistory, dispatch2] = useReducer(
    searchHistoryReducer,
    [],
    () => {
      const localData = localStorage.getItem("searchHistory");
      return localData ? JSON.parse(localData) : [];
    }
  );
  useEffect(() => {
    localStorage.setItem("favWords", JSON.stringify(favWords));
  }, [favWords]);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

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
    dispatch2,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
