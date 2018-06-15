import {addItinerary} from '../actions/itinerary';
import {connect} from 'react-redux';
import moment from 'moment';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {showMarkerPopUp} from '../actions/map';

class PlaceCard extends Component {
    componentWillReceiveProps(nextProps){
        if (nextProps.scrollto!==this.props.scrollto&&nextProps.scrollto==this.props.marker.props.id){
            var child = ReactDOM.findDOMNode(this);
            var parent = this.props.parent;
            if (child.offsetTop < parent.scrollTop) {
                parent.scrollTop = child.offsetTop-child.offsetHeight;
            } else {
                const offsetBottom = child.offsetTop + child.offsetHeight;
                const scrollBottom = parent.scrollTop + parent.offsetHeight;
                if (offsetBottom > scrollBottom) {
                    parent.scrollTop = offsetBottom - 2*child.offsetHeight;
                }
            }
        }
    }
    showPopUp(props){
        this.props.dispatch(showMarkerPopUp(props));
    }
    addItinerary(place){
        this.props.dispatch(addItinerary(place,moment('09:00', 'HH:mm'))); 
    }
    render(){
        return(
            <div className="card">
                <h3>{this.props.marker.props.name}</h3>
                <h5>Rating: {this.props.marker.props.rating}</h5>
                <button onClick={()=>this.addItinerary(this.props.marker.props)}>Add</button>
                <button onClick={()=>this.showPopUp(this.props.marker.props)}>Show</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itinerary:state.itinerary.itinerary,
        startdate:state.itinerary.startdate,
        enddate:state.itinerary.enddate,
        scrollto: state.itinerary.scrollto
    };
};

export default connect(mapStateToProps)(PlaceCard);