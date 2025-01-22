import React from 'react';
import Sports from './Sports';

const SportsContainer = () => {

    const sportsList = [
        {
            name : "축구",
            mamber : 11
        },
        {
            name : "농구",
            mamber : 5
        },
        {
            name : "테니스",
            mamber : 4
        },
        {
            name : "야구",
            mamber : 9
        },
        {
            name : "배구",
            mamber : 6
        },
    ]

    return (
        <div>
            <ul>
                {sportsList.map((sports, i) => <Sports key={i} sports={sports} />)}
            </ul>
        </div>
    );
};

export default SportsContainer;