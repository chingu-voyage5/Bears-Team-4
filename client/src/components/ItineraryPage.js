//https://wireframe.cc/Uufh4I
import {connect} from 'react-redux';
import DateSelect from './DateSelect';
import Map from './Map';
import PlaceSelect from './PlaceSelect';
import Places from './Places';
import React, {Component} from 'react';
import Schedule from './Schedule'
import '../css/Itinerary.css';



class ItineraryPage extends Component {
    render(){
        const schedules = [];
        for (var i = 0;i<=this.props.enddate.diff(this.props.startdate, 'days');i++){
            schedules.push(<Schedule n = {i} key={i} show={i===this.props.activeday}/>);
        }
        
        return(
            <div className="clearfix">
                <div className="top">
                    <h2>Destination&nbsp;</h2>
                    <PlaceSelect/>
                    <DateSelect/>
                </div>
                <div className="half">
                    <div className="half">
                        <h2>Itinerary</h2>
                        {schedules}
                    </div>
                    <div className="half">
                        <Places/>
                    </div>
                </div>
                <div className="half">
                    <h2>Map</h2>
                    <Map/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        startdate:state.itinerary.startdate,
        enddate:state.itinerary.enddate,
        activeday:state.itinerary.activeday
    };
};


export default connect(mapStateToProps)(ItineraryPage);