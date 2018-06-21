import {connect} from 'react-redux';
import {nextDay, prevDay} from '../actions/itinerary';
import React, { Component } from 'react';
import ScheduleCard from './ScheduleCard';

//https://developers.google.com/maps/documentation/distance-matrix/intro

class Schedule extends Component {
    render(){
        const style=this.props.show?{display:'block'}:{display:'none'};
        return(
            <div style={style} className="schedule">
                {this.props.n>0&&
                <i className="fas fa-caret-left" 
                onClick={()=>this.props.dispatch(prevDay(this.props.activeday-1))}>
                </i>}
                <h2>&nbsp;Day {this.props.n+1}&nbsp;</h2>
                {this.props.n<this.props.enddate.diff(this.props.startdate, 'days')&&
                <i className="fas fa-caret-right" 
                onClick={()=>this.props.dispatch(nextDay(this.props.activeday+1))}>
                </i>}
                {this.props.itinerary[this.props.activeday] &&
                this.props.itinerary[this.props.activeday].sort((a,b)=>a.datetime-b.datetime).map(
                    (p,i)=>(<ScheduleCard key={i} place={p.place} datetime={p.datetime}/>)
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        startdate:state.itinerary.startdate,
        enddate:state.itinerary.enddate,
        itinerary:state.itinerary.itinerary,
        activeday:state.itinerary.activeday
    };
};


export default connect(mapStateToProps)(Schedule);