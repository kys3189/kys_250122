import React, { useRef, useState } from 'react';

const Check = () => {
  const [result, setResult] = useState(""); //결과값을 셋리절트에 넣으면 리절트값을 바꿔줌
  const inputRef = useRef([]) //인풋레프를 넣으면 인풋과 연동
  const onClickToPrintHobby = () => {
    let hobby = "";
    for(let i = 0; i < inputRef.current.length; i++){//인풋배열객체 길이값
      let input = inputRef.current[i];//커런트i배열 을 인풋에 넣기
      if(input.checked){//인풋의 객체내부의 체크디드값이 트루면
        hobby += i === inputRef.current.length - 1 ? input.value : input.value + ", "//호비에 추가, 조건값의 맞는 인풋 밸류를
      }
    }
    setResult(hobby)
  }

  return (
    <div>
      <p>{result}</p>
      <div>
        <label>
          <span>축구</span><input value="축구" ref={(el) => { inputRef.current[0] = el}} type="checkbox" name="hobby" />
        </label>
        <label>
          <span>야구</span><input value="야구" ref={(el) => { inputRef.current[1] = el}} type="checkbox" name="hobby" />
        </label>
        <label>
          <span>농구</span><input value="농구" ref={(el) => { inputRef.current[2] = el}} type="checkbox" name="hobby" />
        </label>
      </div>
      <button onClick={onClickToPrintHobby}>취미 확인하기!😎</button>
    </div>
  );
};

export default Check;