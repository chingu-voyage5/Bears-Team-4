import {connect} from 'react-redux';
import moment from 'moment';
import React, { Component } from 'react';
import {changeTime, deletePlace} from '../actions/itinerary';

class ScheduleCard extends Component {
    constructor(){
        super();
        this.state={
            setting:false,
            hour:null,
            minute:null
        };
    }
    changeTime(event){
        event.preventDefault();
        const time = moment(this.state.hour+":"+this.state.minute, 'HH:mm');
        this.props.dispatch(changeTime(time,this.props.place.id));
        this.setState({setting:this.state.setting?false:true});
    }
    deletePlace(){
        this.props.dispatch(deletePlace(this.props.place.id));
    }
    render(){
        return(
        <div className="card">
            {this.state.setting?
            <form onSubmit={(event)=>this.changeTime(event)}>
                <div className="input-field">
                    <input type="number" name="hour" min="0" max="24" placeholder ="0" required onChange={
                        (event)=>{
                            this.setState({hour:event.target.value});
                        }
                    }/>&nbsp;:&nbsp; 
                    <input type="number" name="minute" min="0" max="59" placeholder="00" required onChange={
                        (event)=>{
                            this.setState({minute:event.target.value});
                        }
                    }/>
                </div>
                <h3>{this.props.place.name}</h3>
                <p>{this.props.place.address}</p>
                <button type="submit">Set</button>
                <button onClick={()=>this.setState({setting:this.state.setting?false:true})}>Cancel</button>
            </form>
            :<div>
                <h3>{this.props.datetime.format('HH:mm')}</h3>
                <h3>{this.props.place.name}</h3>
                <p>{this.props.place.address}</p>
                <button onClick={()=>this.setState({setting:this.state.setting?false:true})}>Edit</button>
                <button onClick={()=>this.deletePlace()}>Delete</button>
            </div>
            }
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        startdate:state.itinerary.startdate,
        enddate:state.itinerary.enddate
    };
};


export default connect(mapStateToProps)(ScheduleCard);