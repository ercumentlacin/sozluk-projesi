import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// components
import Home from '../page/Home';
import About from '../page/About';
import Profile from '../page/Profile';
import SearchResults from '../page/SearchResults';
import { ThemeProvider } from '../context/GlobalContext ';
import Navigation from '../components/Navigation';
import { Button, Result } from 'antd';

import styles from './styles.module.css';

function Layout() {
  return (
    <ThemeProvider>
      <div className={styles.globalStyle}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/hakkimizda' component={About} />
            <Route path='/profil' component={Profile} />
            <Route path='/kelime/:slug' component={SearchResults} />
            <Route path='*'>
              <Result
                status='404'
                title='404'
                subTitle='Aradığınız kelime sözlüğümüzde yer almıyor.'
                extra={
                  <Button type='primary'>
                    <Link to='/'>Anasayfaya geri dön</Link>
                  </Button>
                }
              />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default Layout;
