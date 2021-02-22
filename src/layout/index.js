import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Home from "../page/Home";
import About from "../page/About";
import Profile from "../page/Profile";
import SearchResults from "../page/SearchResults";
import FavoriteWords from "../page/FavoriteWords";
import { ThemeProvider } from "../context/ThemeContext ";
import Navbar from "../components/Navbar";
import SearchBox from '../components/SearchBoxNavbar/index';

function Layout() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <SearchBox />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hakkimizda" component={About} />
          <Route path="/profil" component={Profile} />
          <Route path="/kelime/:slug" component={SearchResults} />
          <Route path="/favori-kelimeler" component={FavoriteWords} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default Layout;
