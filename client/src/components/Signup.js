import axios from 'axios';
import {connect} from 'react-redux';
import React, { Component } from 'react';
import {logIn} from '../actions/auth';

class Signup extends Component {
    constructor(){
        super();
        this.state={
            username:"",
            password:"",
            passwordcon:"",
            email:""
        };
    }
    submitSignup(event){
      event.preventDefault();
      axios.post('/signup',{
        name:this.state.username,
        password:this.state.password,
        email:this.state.email
      }).then((response)=>{
        this.props.dispatch(logIn(response.data.user));
      }).catch((error)=>{
        console.log(error);
      })
    }

    render(){
        return(
            <form onSubmit={(event)=>this.submitSignup(event)}>
              <h2>Signup</h2>
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
              <div className="input-field">
                <input type="password" onChange={(event) => {
                  this.setState({passwordcon:event.target.value});
                }}/>
                <em className="help-text">
                  Confirm password
                </em>
              </div>
              <div className="input-field">
                <input type="email" onChange={(event) => {
                  this.setState({email:event.target.value});
                }}/>
                <em className="help-text">
                  Email
                </em>
              </div>
              <button>Submit</button>
            </form>
          )
    }
}

export default connect()(Signup);