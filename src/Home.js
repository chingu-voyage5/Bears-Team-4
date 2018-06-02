import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//components
import LandingPage from './components/LandingPage';

class Home extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={LandingPage}/>
      </Router>
    );
  }
}

export default Home;
