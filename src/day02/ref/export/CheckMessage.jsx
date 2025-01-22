import React, { useState } from 'react';

// 체크박스 버튼을 누르면 화면에 누른 값의 문자열이 출력된다.
// 여러개를 누르면 누른 순서대로 문자열이 이어진다.
// ex) front-end back-end
// 체크박스의 버튼이 해제되면 화면에 누른 값이 사라지도록 구현하기

const CheckMessage = () => {
  const [message, setMessage] = useState([])
  const onClickToCheck = (e) => {
    let value = e.target.value;
    if(e.target.checked){
      // setMessage(message.concat(value))
      setMessage([...message, value])
    }else{
      setMessage(message.filter((m) => m !== value))
    }
  }
  
  return (
    <div>

      <div>
        <span>front-end</span>
        <input onChange={onClickToCheck} type="checkbox" value="front-end" />
      </div>
      <div>
        <span>back-end</span>
        <input onChange={onClickToCheck} type="checkbox" value="back-end" />
      </div>
      <div>
        <span>ai</span>
        <input onChange={onClickToCheck} type="checkbox" value="ai" />
      </div>

      <div>
        <h1>{message.map((m, i) => <p key={i}>{m}</p> )}</h1>
      </div>
    </div>
  );
};

export default CheckMessage;