// 강아지 버튼, 고양이 버튼 2개를 생성한다.
// 버튼을 눌렀을 때 각 울음소리가 나오도록 화면에 구현한다.
// 강아지 버튼을 누르면 멍멍이 화면에 출력되고,
// 고양이 버튼을 누르면 야옹이 화면에 출력된다.

import React, { use, useState } from 'react';

const Sound = () => {
    
    const[text, setText] = useState("")
    const catSound = () => {
        setText(text + "야옹 ")
    }
    const dogSound = () => {
        setText(text + "멍멍 ")
    }
    
    return (
        <div>
            <button onClick={dogSound}>강아지</button>
            <button onClick={catSound}>고양이</button>
            <span>{text}</span>
        </div>
    );
};

export default Sound;