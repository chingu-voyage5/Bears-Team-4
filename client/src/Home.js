import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//components
import LandingPage from './components/LandingPage';
import ItineraryPage from './components/ItineraryPage';

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/itinerary" component={ItineraryPage}/>
        </div>
      </Router>
    );
  }
}

export default Home;
