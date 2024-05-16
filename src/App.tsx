import React, {useState} from 'react';
import './App.css';
import {NewComponent} from './NewComponent';

function App() {
    const [topCars] = useState(
        [
            {manufacturer: 'BMW', model: 'm5cs'},
            {manufacturer: 'Audi', model: 'a4b8'},
            {manufacturer: 'Mercedec', model: 'S-class'},
            {manufacturer: 'Volksvagen', model: 'Touareg'},
        ]
    )
    return (
        <div>
                <NewComponent topCars={topCars}/>
        </div>
    );
}

export default App;
