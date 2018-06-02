import React, {Component} from 'react';
import Step from './Step';
import LogSign from './LogSign';
import '../css/Home.css';

import {connect} from 'react-redux';

class LandingPage extends Component {
    componentDidMount(){
        if(this.props.user)
            console.log("user is logged in");
        else
            console.log("user is not logged in");
    }
    render(){
        return (
        <div>
            <header>
                <div className="left">
                <h1>Website Name</h1>
                <p><img src="https://www.cricketwireless.com/content/dam/a/product/DAP/DAPW4105/DAPW4105-list.png"/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui deserunt dignissimos at provident sunt ipsam quisquam iste harum laboriosam delectus cumque reprehenderit quaerat, fugiat debitis, assumenda nesciunt itaque nam!</p>
                <button className="start">Start Now!</button>
                </div>
                <div className="right">
                <LogSign/>
                </div>
            </header>
            <button className="howitworks">How It Works <i className="fa fa-chevron-down"></i></button>
            <div className="steps" id="steps">
                <Step step="Step 1" desc="Some text describing this step" img = "http://burningrivercreative.com/imgs/analytics-laptop.png"/>
                <Step step="Step 2" desc="Some text describing this step" img = "http://burningrivercreative.com/imgs/analytics-laptop.png"/>
                <Step step="Step 3" desc="Some text describing this step" img = "http://burningrivercreative.com/imgs/analytics-laptop.png"/>
            </div>
            <footer>
                Footer Stuff &copy;
            </footer>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(LandingPage);