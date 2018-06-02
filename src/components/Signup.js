import React, { Component } from 'react';

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
    submitLogin(event){
      event.preventDefault();
      // Ajax to server to use passport here
      alert('user :'+this.state.username+" password:"+this.state.password+
      " confirm password: "+this.state.passwordcon+" email: "+this.state.email);
    }

    render(){
        return(
            <form>
              <h2>Signup</h2>
              <div className="input-field">
                <input type="text"/>
                <em className="help-text">
                  Username
                </em>
              </div>
              <div className="input-field">
                <input type="password"/>
                <em className="help-text">
                  Password
                </em>
              </div>
              <div className="input-field">
                <input type="password"/>
                <em className="help-text">
                  Confirm password
                </em>
              </div>
              <div className="input-field">
                <input type="email"/>
                <em className="help-text">
                  Email
                </em>
              </div>
              <button>Submit</button>
            </form>
          )
    }
}

export default Signup;