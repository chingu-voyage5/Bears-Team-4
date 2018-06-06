import {connect} from 'react-redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import {suggestions} from '../actions/itinerary';


export class MapContainer extends Component {
    constructor(props){
        super(props);
        this.state={map:null};
    }
    componentWillReceiveProps(nextProp){
        if (nextProp.center!==this.props.center||nextProp.type!==this.props.type){
            this.searchNearby(this.state.map,nextProp.center,nextProp.type);
        }
    }
    searchNearby(map,center,type){
        const { google } = this.props;
        const service = new google.maps.places.PlacesService(map);
        const request = {
          location: center,
          radius: '500',
          type: [type]
        };
        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK)
            this.props.dispatch(suggestions(results));
        });
    }
    render() {
        return (
          <Map google={this.props.google} 
              onReady={(_, map)=>this.setState({map:map})}
              zoom={14}
              center={this.props.center}
              style={{height:"500px"}}
          >
          </Map>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        center: state.map.center,
        type: state.map.type
    }
}

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: ('AIzaSyCpnZV3MwYpso0pT3Bb8Nr9TqVh1EGR5Jc'),
  libraries:['places']
})(MapContainer))

