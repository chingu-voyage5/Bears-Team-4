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
    constructor(props) {
        super(props); 
    }
    changeType(event){
        this.props.dispatch(changeType(event.target.value));
    }
    render(){
        return(
            <div>
                <div>Places to go</div>
                <select onChange={(event)=>this.changeType(event)}>{type.map((t,i)=>(<option key={i} value={t}>{t.replace('_',' ')}</option>))}
                </select>
            {this.props.places.length>0?
                <ul>
                    {this.props.places.map(p=>(<li key={p.id}>{p.name}</li>))}
                </ul>:<div>Nothing to show</div>
            }
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        places: state.map.places
    };
};

export default connect(mapStateToProps)(Suggestions);