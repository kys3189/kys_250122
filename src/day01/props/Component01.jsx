import React from 'react';

const Component01 = (props) => {
    console.log(props);
    
    return (
        <div>
            {props.name}
        </div>
    );
};

export default Component01;