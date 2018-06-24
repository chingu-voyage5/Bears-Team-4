import {connect} from 'react-redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import {showSuggestions} from '../actions/itinerary';
import {showMarkerPopUp, showInfoPopUp, closeMarkerPopUp, closeInfoPopUp, scrollTo} from '../actions/map';
import StarIcon from '../img/star_icon.png';
import MarkerIcon from '../img/marker_icon.png';

export class MapContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            map:null
        };
    }
    componentWillReceiveProps(nextProp){
        if ((nextProp.center!==this.props.center&&nextProp.type!=='default')||nextProp.type!==this.props.type){
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
        const added = this.props.itinerary[this.props.activeday]?this.props.itinerary[this.props.activeday].map(i=>i.place.id):[];
        service.nearbySearch(request, (results, status) => {
          const places = results.filter((p)=>(added.indexOf(p.place_id)==-1));
          this.props.dispatch(showSuggestions(places));
          if (status !== google.maps.places.PlacesServiceStatus.OK) 
            this.props.dispatch(showInfoPopUp());
        });
    }
    formatMarkerProps(props){
      const rtn = {
          name:props.name,
          rating:props.rating,
          address:props.address,
          lat:props.position.lat,
          lng:props.position.lng
      };
      return rtn;
    }
    showPopUp(props){
        this.props.dispatch(showMarkerPopUp(this.formatMarkerProps(props)));
        this.props.dispatch(scrollTo(props.id));
    }
    closeMarkerPopUp(){
        this.props.dispatch(closeMarkerPopUp());
    }
    closeInfoPopUp(){
        this.props.dispatch(closeInfoPopUp());      
    }

    render() {
        var google = this.props.google;
        var added = this.props.itinerary[this.props.activeday]?this.props.itinerary[this.props.activeday].map(p=>p.place.place_id):[];
        return (
          <Map google={this.props.google} 
              onReady={(_, map)=>this.setState({map:map})}
              zoom={14}
              initialCenter ={this.props.center}
              center={this.props.center}
              style={{height:"500px"}}>
              {this.props.places.filter(p=>added.indexOf(p.place_id)==-1).map((p,i)=>
                (<Marker
                  id= {p.place_id}
                  key={i}
                  title={p.name}
                  name={p.name}
                  address={p.vicinity}
                  rating = {p.rating}
                  onClick={this.showPopUp.bind(this)}
                  position={{lat: p.geometry.location.lat(), lng: p.geometry.location.lng()}} 
                  icon={{
                    url: MarkerIcon,
                    anchor: new google.maps.Point(16,16),
                    scaledSize: new google.maps.Size(32,32)
                  }}/>)
              )}
              {this.props.itinerary[this.props.activeday]&&
                this.props.itinerary[this.props.activeday].map((p,i)=>
                    (<Marker
                      id= {p.place.place_id}
                      key={i}
                      title={p.place.name}
                      name={p.place.name}
                      address={p.place.vicinity}
                      rating = {p.place.rating}
                      onClick={this.showPopUp.bind(this)}
                      position={{lat: p.place.geometry.location.lat(), lng: p.place.geometry.location.lng()}} 
                      icon={{
                        url: StarIcon,
                        anchor: new google.maps.Point(16,16),
                        scaledSize: new google.maps.Size(32,32)
                      }}/>)
                  )
              }
            <InfoWindow
              position = {{
                lat:this.props.markerLat,
                lng:this.props.markerLng,
              }}
              onClose={this.closeMarkerPopUp.bind(this)}
              visible={this.props.showMarkerPopUp}>
              <div>
                <h3>{this.props.selectedPlace.name}</h3>
                <p>Rating : {this.props.selectedPlace.rating}</p>
                <p>{this.props.selectedPlace.address}</p>
                <div id="add"></div>
              </div>
            </InfoWindow>
            <InfoWindow
              position = {this.props.center}
              onClose={this.closeInfoPopUp.bind(this)}
              visible={this.props.showInfoPopUp}><h3>No results found</h3>
            </InfoWindow>
          </Map>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        center: state.map.center,
        places: state.itinerary.places,
        type: state.itinerary.type,
        itinerary:state.itinerary.itinerary,
        showMarkerPopUp:state.map.showMarkerPopUp,
        showInfoPopUp: state.map.showInfoPopUp,
        selectedPlace:state.map.selectedPlace,
        markerLat:state.map.markerLat,
        markerLng:state.map.markerLng,
        activeday:state.itinerary.activeday
    };
};

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: ('AIzaSyCpnZV3MwYpso0pT3Bb8Nr9TqVh1EGR5Jc'),
  libraries:['places']
})(MapContainer));

