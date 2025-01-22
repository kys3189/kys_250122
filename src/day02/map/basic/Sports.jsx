import React from 'react';

const Sports = (name, member) => {

    return (
        <div>
            <li>
                <p>종목 : {name}</p>
                <p>인원 : {member}</p>
            </li>
        </div>
    );
};

export default Sports;