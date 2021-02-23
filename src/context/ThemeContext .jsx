import React, { useState, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [word, setWord] = useState("");
  const [newWord, setNewWord] = useState("");
  const [results, setResults] = useState("");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const value = {
    theme,
    toggleTheme,
    word,
    setWord,
    results,
    setResults,
    newWord,
    setNewWord,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
