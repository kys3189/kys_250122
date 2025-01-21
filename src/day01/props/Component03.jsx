import React from 'react';

const Component03 = ({ containerStyle, boxStyle }) => {
  // const { containerStyle, boxStyle } = props;
  // console.log(props)

  return (
    <div style={containerStyle}>
      <div style={boxStyle}></div>
      <div style={boxStyle}></div>
      <div style={boxStyle}></div>
    </div>
  );
};

export default Component03;