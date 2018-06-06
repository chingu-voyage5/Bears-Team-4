import DateSelect from './DateSelect';
import Map from './Map';
import PlaceSelect from './PlaceSelect';
import React, {Component} from 'react';
import Places from './Places';


class TestPage extends Component {
    render(){
        return (
            <div>
                <DateSelect/>
                <PlaceSelect/>
                <Places/>
                <Map/>
            </div>
        );
    }
}

export default TestPage;
