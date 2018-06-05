import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import React, { Component } from 'react';
import {selectStartDate, selectEndDate} from '../actions/itinerary';
import 'react-datepicker/dist/react-datepicker.css';

class DateSelect extends Component {
    constructor(){
        super();
        this.state = {
            start:moment(),
            end:moment()
        };
    }
    setStartDate(date){
        this.setState({start:date});
        this.props.dispatch(selectStartDate(date));
    }
    setEndDate(date){
        this.setState({end:date});
        this.props.dispatch(selectEndDate(date));
    }
    render(){
        return(
            <div>
                From
                <DatePicker
                    selected={this.state.start}
                    selectsStart
                    startDate={this.state.start}
                    endDate={this.state.end}
                    onChange={(date)=>this.setStartDate(date)}
                />
                To
                <DatePicker
                    selected={this.state.end}
                    selectsEnd
                    startDate={this.state.start}
                    endDate={this.state.end}
                    onChange={(date)=>this.setEndDate(date)}
                />
            </div>
        )
    }
    
}


export default connect()(DateSelect);