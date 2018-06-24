import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import React, { Component } from 'react';
import {selectStartDate, selectEndDate} from '../actions/itinerary';
import 'react-datepicker/dist/react-datepicker.css';

class DateSelect extends Component {
    setStartDate(date){
        //this.setState({start:date});
        this.props.dispatch(selectStartDate(date));
    }
    setEndDate(date){
        //this.setState({end:date});
        this.props.dispatch(selectEndDate(date));
    }
    render(){
        return(
            <div className="date-selector input-field">
                <h2>From&nbsp;</h2>
                <DatePicker
                    selected={this.props.startdate}
                    selectsStart
                    startDate={this.props.props}
                    endDate={this.props.enddate}
                    onChange={(date)=>this.setStartDate(date.startOf('day'))}
                />
                <h2>To&nbsp;</h2>
                <DatePicker
                    selected={this.props.enddate}
                    selectsEnd
                    startDate={this.props.startdate}
                    endDate={this.props.enddate}
                    onChange={(date)=>this.setEndDate(date.startOf('day'))}
                />
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        startdate:state.itinerary.startdate,
        enddate:state.itinerary.enddate
    };
};

export default connect(mapStateToProps)(DateSelect);