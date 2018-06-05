import DateSelect from './DateSelect';
import LeafletMap from './Map';
import PlaceSelect from './PlaceSelect';
import React, {Component} from 'react';
import '../css/TestPage.css';

class TestPage extends Component {
    render(){
        return (
            <header>
                <div class="left">
                    <DateSelect/>
                    <PlaceSelect/>
                </div>
                <div class="right">
                    <LeafletMap/>
                </div>
            </header>
        )
    }
}

export default TestPage;
