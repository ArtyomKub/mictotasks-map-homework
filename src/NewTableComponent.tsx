import React from 'react';
import {EliteCarsType} from './NewComponent';
import {TopCarsType} from './NewComponent';


export const NewTableComponent = (props: EliteCarsType) => {
    return (
        <table>
            <tr>
                <th>MANUFACTURER</th>
                <th>MODEL</th>
            </tr>
            {props.topCars.map((object: TopCarsType, index) => {
                return (
                    <div>
                        <tr>
                            <td>{object.manufacturer}</td>
                            <td>{object.model}</td>
                        </tr>
                    </div>
                )
            })}
        </table>
    );
};

