import Login from './Login'
import React, { Component } from 'react';
import Signup from './Signup'

class LogSign extends Component {
    constructor(){
        super();
        this.state={
            active:"login"
        };
    }
    changeTab(option){
        this.setState({
            active:option
        });
    }
    render(){
        return(
        <div className="login-signup-modal">
            <div className="tabs">
                <span className={this.state.active==="login"?"tab active":"tab"} onClick={()=>this.changeTab("login")}>Login</span>
                <span className={this.state.active==="signup"?"tab active":"tab"} onClick={()=>this.changeTab("signup")}>Signup</span>
            </div>
            {this.state.active==="login"?
                <Login/>:<Signup/>}
          </div>
          )
    }
}

export default LogSign;