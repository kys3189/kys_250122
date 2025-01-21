import React from 'react';
// import Component01 from './Component01';
// import Component02 from './Component02';
// import Component03 from './Component03';
import Component04 from './Component04';

const Container = () => {
  const name = "홍길동";

  const containerStyle = {
    display : "flex",
    gap : "4px"
  }

  const boxStyle = {
    width : "100px",
    height : "100px",
    backgroundColor : "orange"
  }

  const num = 11;

  const val = () => {
    console.log(num);
    console.log(name);
  }
  

  return (
    <div>
      {/* <Component01 name={name} />
      <Component02>
        <span style={{ backgroundColor : "blue" }} >안녕하세요!! 😎</span>

      </Component02> */}
      {/* <Component03 containerStyle={containerStyle} boxStyle={boxStyle} /> */}
      <Component04 name={name} num={num} val={val}/>
    </div>
  );
};

export default Container;


//컴포넌트01에 네임이라는 이름의{속성} //프로퍼티 키벨류 전송
//컴포넌트02에 안녕하세요!!를 보내고 props.children으로 받고 다시 전송
//컴포넌트02에 스타일을 주려면 {js선언}하고 그 안에{키 : 밸류}객체값을 넣어야함함