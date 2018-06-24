import {Link} from 'react-router-dom';
import LogSign from './LogSign';
import {checkUser, logOut} from '../actions/auth';
import React, {Component} from 'react';
import Step from './Step';
import { withCookies } from 'react-cookie';
import '../css/Home.css';

import {connect} from 'react-redux';

class LandingPage extends Component {
    constructor(props){
        super(props);
        const config = {
            headers: {'Authorization': "bearer " + props.cookies.get('jwt')}
        };
        this.props.dispatch(checkUser(config));
    }
    removeCookie(){
        this.props.dispatch(logOut());
        this.props.cookies.remove('jwt');
    }
    render(){
        return (
        <div>
            <header>
                <div className="left">
                {this.props.user&&<button className="right-float" onClick={()=>this.removeCookie()}>Logout</button>}
                {this.props.user&&<h2>Welcome, {this.props.user}</h2>}
                <h1>Website Name</h1>
                <p><img src="https://www.cricketwireless.com/content/dam/a/product/DAP/DAPW4105/DAPW4105-list.png"/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui deserunt dignissimos at provident sunt ipsam quisquam iste harum laboriosam delectus cumque reprehenderit quaerat, fugiat debitis, assumenda nesciunt itaque nam!</p>
                <button className="start"><Link to="itinerary">Start Now!</Link></button>
                </div>
                {!this.props.user&&<LogSign/>}
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

export default withCookies(connect(mapStateToProps)(LandingPage));