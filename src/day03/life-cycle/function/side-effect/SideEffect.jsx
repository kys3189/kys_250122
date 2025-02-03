import React, { useEffect, useState } from 'react';

const SideEffect = () => {
  //넵 생성이요..
  const [color, setColor] = useState("")
  const [number, setNumber] = useState(0) 

  //math랜덤 함수를 사용해서 0~1사이에 랜덤한 숫자를 생성하고, 16777215를 곱하여 0~16777251사이에 랜덤한 수를 생성
  //16진수로 변환하고, 앞에 #을 붙여 색상코드로 만듭니다.
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
  }
  
  //온클릭 이벤트시 셋 컬러에 랜덤색상을 부여
  const onClickToChangeColor = () => {
  setColor(getRandomColor())
  }
  
  // 온클릭 이벤트시 셋넘버에 1씩 더함
  const onClickToIncrease = () => {
  setNumber(number + 1)
  }
  
  //컴포넌트가 렌더링한 후 한번만 실행할 함수
  useEffect(() => {
    console.log("리랜더링 🎈")
  }, [])

  return (
    <div>
      <h1>안녕하세요😎</h1>
      <button onClick={onClickToChangeColor}>색상 변경</button>
      <button onClick={onClickToIncrease}>+1 증가</button>
    </div>
  );
};

export default SideEffect;