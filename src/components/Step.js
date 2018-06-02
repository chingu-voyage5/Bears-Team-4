import React, { Component } from 'react';

class Step extends Component {
    render(){
        return(
            <div class="step">
              <div class="info">
                <h2>{this.props.step}</h2>
                <p>{this.props.desc}</p>
              </div>
              <div class="image">
                <img width="600px" height="300px" src={this.props.img}/>
              </div>
            </div>
        )
    }
}

export default Step;