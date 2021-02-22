import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Home from "../page/Home";
import About from "../page/About";
import Profile from "../page/Profile";
import SearchResults from "../page/SearchResults";
import { ThemeProvider } from "../context/ThemeContext ";
// import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import { GlobalStyle } from "./styles";
function Layout() {
  return (
    <ThemeProvider>
      <GlobalStyle>
        <Router>
          {/* <Navbar /> */}
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hakkimizda" component={About} />
            <Route path="/profil" component={Profile} />
            <Route path="/kelime/:slug" component={SearchResults} />
          </Switch>
        </Router>
      </GlobalStyle>
    </ThemeProvider>
  );
}

export default Layout;
