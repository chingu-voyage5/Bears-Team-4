import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//components
import LandingPage from './components/LandingPage';
import TestPage from './components/TestPage';

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/test" component={TestPage}/>
        </div>
      </Router>
    );
  }
}

export default Home;
