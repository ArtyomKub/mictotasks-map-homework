import React, {useState} from 'react';
import './App.css';
import {NewComponent} from './NewComponent';
import {NewTableComponent} from './NewTableComponent';

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
                <NewTableComponent/>
        </div>
    );
}


export default App;
