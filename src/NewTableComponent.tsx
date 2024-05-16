import React from 'react';
import {EliteCarsType} from './NewComponent';
import {TopCarsType} from './NewComponent';


export const NewTableComponent = (props: EliteCarsType) => {
        return (
            <table>
                <thead>
                <tr>
                    <th>POSITION</th>
                    <th>MANUFACTURER</th>
                    <th>MODEL</th>
                </tr>
                </thead>
                {props.topCars.map((object: TopCarsType, index) => {
                    return (
                        <tbody key={index}>
                        <tr>
                            <td>{index+1}</td>
                            <td>{object.manufacturer}</td>
                            <td>{object.model}</td>
                        </tr>
                        </tbody>
                    )
                })}
            </table>
        )
            ;
    }
;

