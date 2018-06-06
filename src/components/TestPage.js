import DateSelect from './DateSelect';
import Map from './Map';
import PlaceSelect from './PlaceSelect';
import React, {Component} from 'react';
import Suggestions from './Suggestions';


class TestPage extends Component {
    render(){
        return (
            <div>
                <DateSelect/>
                <PlaceSelect/>
                <Suggestions/>
                <Map/>
            </div>
        );
    }
}

export default TestPage;
