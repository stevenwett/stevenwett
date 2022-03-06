// import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import moment from 'moment';

import Home from './components/Home';
import NoMatch from './components/NoMatch';

const App = () => {
  const year = moment().year();

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
      <div className="background-image">
        <picture>
          <source srcSet="/images/wett-colorado-stars.webp" type="image/webp" />
          <img src="/images/wett-colorado-stars.jpg" alt="Colorado at night" />
        </picture>
      </div>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="photo-cred"><span>Background Photo</span> Medicine Bow-Routt National Forest (Steven Wett, 2019)</p>
              <p>&copy; {year} Steven Wett</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
