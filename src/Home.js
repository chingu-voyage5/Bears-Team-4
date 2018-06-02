import LogSign from './components/LogSign';
import React, { Component } from 'react';
import Step from './components/Step';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
      <header>
        <div class="left">
          <h1>Website Name</h1>
          <p><img src="https://www.cricketwireless.com/content/dam/a/product/DAP/DAPW4105/DAPW4105-list.png"/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui deserunt dignissimos at provident sunt ipsam quisquam iste harum laboriosam delectus cumque reprehenderit quaerat, fugiat debitis, assumenda nesciunt itaque nam!</p>
          <button class="start">Start Now!</button>
        </div>
        <div class="right">
          <LogSign/>
        </div>
      </header>
      <button class="howitworks">How It Works <i class="fa fa-chevron-down"></i></button>
      <div class="steps" id="steps">
        <Step step="Step 1" desc="Some text describing this step" img = "http://burningrivercreative.com/imgs/analytics-laptop.png"/>
        <Step step="Step 2" desc="Some text describing this step" img = "http://burningrivercreative.com/imgs/analytics-laptop.png"/>
        <Step step="Step 3" desc="Some text describing this step" img = "http://burningrivercreative.com/imgs/analytics-laptop.png"/>
      </div>
      <footer>
        Footer Stuff &copy;
      </footer>
      </div>
    );
  }
}

export default Home;
