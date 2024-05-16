import React from 'react';

export type EliteCarsType = {
    topCars: Array<TopCarsType>
}

export type TopCarsType = {
    manufacturer: string
    model: string
}

export const NewComponent = (props: EliteCarsType) => {
    return (
        <div>
            <ul>
                {props.topCars.map((object: TopCarsType, index) => {
                    return (
                        <li key={index}>
                            <span>{index + 1}</span>
                            <span>{object.manufacturer}</span>
                            <span>{object.model}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

