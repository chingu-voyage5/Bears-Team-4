import {connect} from 'react-redux';
import { Map, TileLayer} from 'react-leaflet';
import React, { Component } from 'react';

class LeafletMap extends Component {
    constructor(){
        super()
    }
    render(){
        return(
        <Map center={this.props.center} zoom={11}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </Map>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        center: state.map.center
    }
}

export default connect(mapStateToProps)(LeafletMap);