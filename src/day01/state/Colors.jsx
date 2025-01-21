import React, { useState } from 'react';
// 빨간색 버튼을 누르면 글자색을 빨갛게
// 파란색 버튼을 누르면 글자색을 파랗게
// 핑크색을 입력하면 글자의 색깔을 없앤다.


const Colors = () => {
    const [text, setText] = useState("")
    const redColor = () => {
        setText("red")
    }
    const blueColor = () => {
        setText("blue")
    }
    
  return (
    <div>
      <p style={{color : text}}>결과</p>
      <input onKeyUp={(e) => {
        e.key === "Enter" && e.target.value === "핑크색" && setText()
      }}
      type="text" placeholder='색을 입력하세요'/>
      <button onClick={redColor}>빨간색</button>
      <button onClick={blueColor}>파란색</button>
    </div>
  );
};

export default Colors;

// import React, { useState } from 'react';
// 빨간색 버튼을 누르면 글자색을 빨갛게
// 파란색 버튼을 누르면 글자색을 파랗게
// 핑크색을 입력하면 글자의 색깔을 없앤다.


// const Colors = () => {
//     const [result, setResult] = useState("초기값")
//     const [color, setColor] = useState("")
  
//     const onClickToChangeBlue = () => {
//       setColor("blue")
//     }
//     const onClickToChangeRed = () => {
//       setColor("red")
//     }
  
//     const onResult = (e) => {
//       if(e.target.value === "핑크색"){
//         setColor("")
//       }
//     }
  
//     return (
//       <div>
//         <p style={{color}}>{result}</p>
//         <input onChange={onResult} type="text" />
//         <button onClick={onClickToChangeRed}>빨간색</button>
//         <button onClick={onClickToChangeBlue}>파란색</button>
//       </div>
//     );
//   };
  
//   export default Colors;

