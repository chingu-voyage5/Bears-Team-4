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
      // Ajax to server to use passport here
      alert('user :'+this.state.username+" password:"+this.state.password);
    }

    render(){
        return(
            <form onSubmit={(event)=>this.submitLogin(event)}>
              <h2>Login</h2>
              <div class="input-field">
                <input type="text" onChange={(event) => {
                  this.setState({username:event.target.value});
                }}/>
                <em class="help-text">
                  Username
                </em>
              </div>
              <div class="input-field">
                <input type="password" onChange={(event) => {
                  this.setState({password:event.target.value});
                }}/>
                <em class="help-text">
                  Password
                </em>
              </div>
              <button type="submit">Submit</button>
              <a href="#" >I forgot my password</a>
            </form>
          )
    }
}

export default Login;