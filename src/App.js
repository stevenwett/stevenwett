// import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import moment from 'moment';

import Home from './routes/Home';
import Projects from './routes/Projects';
import ProjectGeminiMemorialDesigner from './routes/projects/ProjectGeminiMemorialDesigner';
import Work from './routes/Work';
import About from './routes/About';
import NoMatch from './routes/NoMatch';

const App = () => {
  const year = moment().year();

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/ux-projects' component={Projects} />
          <Route exact path='/projects/gemini-memorial-designer' component={ProjectGeminiMemorialDesigner} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/about' component={About} />
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
      {/*<div className="background-image">
        <picture>
          <source srcSet="/images/wett-colorado-stars.webp" type="image/webp" />
          <img src="/images/wett-colorado-stars.jpg" alt="Colorado at night" />
        </picture>
      </div>*/}
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
    </div>
  );
}

export default App;
