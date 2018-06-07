import {connect} from 'react-redux';
import React, { Component } from 'react';
import {changeType} from '../actions/itinerary';


const type=[
    'airport',
    'amusement_park',
    'aquarium',
    'art_gallery',
    'bakery',
    'bar',
    'book_store',
    'cafe',
    'casino',
    'movie_theater',
    'museum',
    'night_club',
    'park',
    'restaurant',
    'spa',
    'stadium',
    'zoo'
    ];

class Suggestions extends Component {
    changeType(event){
        this.props.dispatch(changeType(event.target.value));
    }
    render(){
        return(
            <div>
                <div style={{display:'inline-block'}}>
                    <div>Places to go</div>
                    <select value={this.props.type} onChange={(event)=>this.changeType(event)} >
                        <option value ="default" disabled="disabled">Choose a type</option>
                        {type.map((t,i)=>(<option key={i} value={t}>{t.replace('_',' ')}
                        </option>))}
                    </select>
                </div>
                <div style={{display:'inline-block'}}>
                    <div>Added places</div>
                    {this.props.itinerary.length>0?
                        <ul>
                            {this.props.itinerary.map((p,i)=>(<li key={i}>{p.name}</li>))}
                        </ul>:<div>Nothing to show</div>
                    }
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        places: state.map.places,
        type: state.map.type,
        itinerary:state.map.itinerary
    };
};

export default connect(mapStateToProps)(Suggestions);