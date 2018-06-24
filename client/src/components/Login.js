import axios from 'axios';
import {connect} from 'react-redux';
import {logIn} from '../actions/auth';
import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        };
    }
    submitLogin(event){
      event.preventDefault();
      axios.post('/login',{
        name:this.state.username,
        password:this.state.password
      }).then((response)=>{
        this.props.dispatch(logIn(response.data.user));
      }).catch((error)=>{
        console.log(error);
      })
    }

    render(){
        return(
            <form onSubmit={(event)=>this.submitLogin(event)}>
              <h2>Login</h2>
              <div className="input-field">
                <input type="text" onChange={(event) => {
                  this.setState({username:event.target.value});
                }}/>
                <em className="help-text">
                  Username
                </em>
              </div>
              <div className="input-field">
                <input type="password" onChange={(event) => {
                  this.setState({password:event.target.value});
                }}/>
                <em className="help-text">
                  Password
                </em>
              </div>
              <button type="submit">Submit</button>
              <a href="#" >I forgot my password</a>
            </form>
          )
    }
}

export default connect()(Login);