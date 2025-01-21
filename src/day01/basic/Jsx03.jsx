//name과 age를 입력 후 화면에 랜더링 시키기 실습

//rsc 하면 snippets 아래거 만들어줌줌
import React from 'react';

const Jsx03 = () => {
    const name = "김영수"
    const age = 25
    return (
        <>
            {name}{age} 
        </>
    );
};

export default Jsx03;