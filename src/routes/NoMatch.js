import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class NoMatch extends Component {
  componentDidMount() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  render() {
    return(
      <>
        <Redirect to="/" />
      </>
    );
  }
}

export default NoMatch;
