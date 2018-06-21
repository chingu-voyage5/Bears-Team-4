import {connect} from 'react-redux';
import { GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import React, { Component } from 'react';
import {selectPlace} from '../actions/map';

class PlaceSelect extends Component {
  constructor(props) {
    super(props);  
    this.state = { address: '' }
  }

  handleChange = (address) => {
    this.setState({ address })
  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => {
          this.setState({
              address: results[0].formatted_address
          });
          return getLatLng(results[0])
      })
      .then((latlng) => {
          
          this.props.dispatch(selectPlace(latlng));
      })
      .catch(error => console.error('Error', error))
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div className="input-field">
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                const style = suggestion.active
                            ? { backgroundColor: 'whitesmoke', cursor: 'pointer'}
                            : { backgroundColor: 'white', cursor: 'pointer'};
                return (
                  <div {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default connect()(GoogleApiWrapper({
  apiKey: ('AIzaSyCpnZV3MwYpso0pT3Bb8Nr9TqVh1EGR5Jc'),
  libraries:['places']
})(PlaceSelect));