import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Home from "../page/Home";
import About from "../page/About";
import Profile from "../page/Profile";
import { ThemeProvider } from "../context/ThemeContext ";
import Navbar from "../components/Navbar";
function Layout() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hakkimizda" component={About} />
          <Route path="/profil" component={Profile} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default Layout;
