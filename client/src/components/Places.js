import {connect} from 'react-redux';
import PlaceCard from './PlaceCard';
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
                <h2>Search for Activities</h2>
                <select value={this.props.type} onChange={(event)=>this.changeType(event)} >
                    <option value ="default" disabled="disabled">Choose a type</option>
                    {type.map((t,i)=>(<option key={i} value={t}>{t.replace('_',' ')}
                    </option>))}
                </select>
                <div className="scroll" ref="container">
                    {this.props.places.length >0?this.props.places.map((p,i)=>(<PlaceCard parent={this.refs.container} key={i} place={p}/>))
                        :<div>Nothing to show</div>
                    }
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        places: state.itinerary.places,
        type: state.itinerary.type
    };
};

export default connect(mapStateToProps)(Suggestions);