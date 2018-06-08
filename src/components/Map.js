import {connect} from 'react-redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {showSuggestions, addItinerary, showMarkerPopUp, showInfoPopUp, closeMarkerPopUp, closeInfoPopUp} from '../actions/itinerary';


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
          this.props.dispatch(showSuggestions(results));
          if (status !== google.maps.places.PlacesServiceStatus.OK) 
            this.props.dispatch(showInfoPopUp());
        });
    }
    showPopUp(props, marker){
        this.props.dispatch(showMarkerPopUp(props,marker));
        if (this.props.itinerary.map(i=>i.id).indexOf(props.id)===-1)
        {
          const addButton = <div style={{cursor:"pointer"}}onClick={()=>this.props.dispatch(addItinerary(props))}>Add to itinerary</div>;
          return ReactDOM.render(addButton,document.getElementById('add'));
        }
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
              {this.props.places.map(
                (p,i)=>{
                if (this.props.itinerary.map(i=>i.id).indexOf(p.place_id)===-1)
                  return(
                    <Marker
                      id= {p.place_id}
                      key={i}
                      title={p.name}
                      name={p.name}
                      address={p.vicinity}
                      rating = {p.rating}
                      onClick={this.showPopUp.bind(this)}
                      position={{lat: p.geometry.location.lat(), lng: p.geometry.location.lng()}} />
                      );
                }
              )}
              {this.props.itinerary.map(
                (p,i) =>(<Marker
                      id= {p.id}
                      key={i}
                      title={p.title}
                      name={p.name}
                      address={p.address}
                      rating = {p.rating}
                      onClick={p.onClick}
                      position={p.position} 
                      icon={{
                        url: "http://www.googlemapsmarkers.com/v1/009900/"
                      }}
                      />)
                
              )}
            <InfoWindow
              marker={this.props.activeMarker}
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
        places: state.map.places,
        type: state.map.type,
        itinerary:state.map.itinerary,
        showMarkerPopUp:state.map.showMarkerPopUp,
        showInfoPopUp: state.map.showInfoPopUp,
        activeMarker:state.map.activeMarker,
        selectedPlace:state.map.selectedPlace
    };
};

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: ('AIzaSyCpnZV3MwYpso0pT3Bb8Nr9TqVh1EGR5Jc'),
  libraries:['places']
})(MapContainer))

