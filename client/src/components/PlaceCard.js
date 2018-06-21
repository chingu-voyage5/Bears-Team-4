import {addItinerary} from '../actions/itinerary';
import {connect} from 'react-redux';
import moment from 'moment';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {showMarkerPopUp} from '../actions/map';

class PlaceCard extends Component {
    constructor(){
        super();
        this.state={
            settime:false,
            hour:9,
            minute:0
        };
    }
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
        this.setState({settime:false});
        this.props.dispatch(addItinerary(place,moment(this.state.hour+':'+this.state.minute, 'HH:mm'))); 
    }
    render(){
        return(
            <div className="card">
                <h3>{this.props.marker.props.name}</h3>
                <h5>Rating: {this.props.marker.props.rating}</h5>
                {this.state.settime?
                <div>
                    <div className="input-field">
                        <input type="number" name="hour" min="0" max="24"  value={this.state.hour} required onChange={
                            (event)=>{
                                this.setState({hour:event.target.value});
                            }
                        }/>&nbsp;:&nbsp; 
                        <input type="number" name="minute" min="0" max="59" value={this.state.minute} required onChange={
                            (event)=>{
                                this.setState({minute:event.target.value});
                            }
                        }/>
                    </div>
                    <button onClick={()=>this.addItinerary(this.props.marker.props)}>Confirm</button>
                    <button onClick={()=>this.showPopUp(this.props.marker.props)}>Show</button>
                </div>
                :<div>
                    <button onClick={()=>this.setState({settime:true})}>Add</button>
                    <button onClick={()=>this.showPopUp(this.props.marker.props)}>Show</button>
                </div>}
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