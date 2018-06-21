import {connect} from 'react-redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import {showSuggestions} from '../actions/itinerary';
import {showMarkerPopUp, showInfoPopUp, closeMarkerPopUp, closeInfoPopUp, scrollTo} from '../actions/map';


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
        service.nearbySearch(request, (results, status) => {
          const markers = results.map(
                (p,i)=>{
                //if (this.props.itinerary.map(i=>i.id).indexOf(p.place_id)===-1) 
                  return (<Marker
                      id= {p.place_id}
                      key={i}
                      title={p.name}
                      name={p.name}
                      address={p.vicinity}
                      rating = {p.rating}
                      onClick={this.showPopUp.bind(this)}
                      position={{lat: p.geometry.location.lat(), lng: p.geometry.location.lng()}} />);
                }
            );
          this.props.dispatch(showSuggestions(markers));
          if (status !== google.maps.places.PlacesServiceStatus.OK) 
            this.props.dispatch(showInfoPopUp());
        });
    }
    showPopUp(props){
        this.props.dispatch(showMarkerPopUp(props));
        this.props.dispatch(scrollTo(props.id));
        /*if (this.props.itinerary.map(i=>i.id).indexOf(props.id)===-1) {
          const addButton = <button onClick={()=>this.props.dispatch(addItinerary(props))}>Add to itinerary</button>;
          return ReactDOM.render(addButton,document.getElementById('add'));
        }*/
    }
    closeMarkerPopUp(){
        this.props.dispatch(closeMarkerPopUp());
    }
    closeInfoPopUp(){
        this.props.dispatch(closeInfoPopUp());      
    }

    render() {
        return (
          <Map google={this.props.google} 
              onReady={(_, map)=>this.setState({map:map})}
              zoom={14}
              initialCenter ={this.props.center}
              center={this.props.center}
              style={{height:"500px"}}>
              {this.props.places}
            <InfoWindow
              position = {{
                lat:this.props.markerPosition.lat,
                lng:this.props.markerPosition.lng,
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
        markerPosition:state.map.markerPosition,
        selectedPlace:state.map.selectedPlace
    };
};

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: ('AIzaSyCpnZV3MwYpso0pT3Bb8Nr9TqVh1EGR5Jc'),
  libraries:['places']
})(MapContainer))

