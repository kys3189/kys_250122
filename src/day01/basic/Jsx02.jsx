import React from "react"

// JSX(Javascript XML)
//  - Javascript에서 XML을 추가한 문법이며,
//  브라우저에서 실행되기 전에 코드가 번들링 되는 과정에서 바벨을 사용하여
//  일반적인 자바스크립트의 형태의 코드로 변환된다. 
//  HTML 코드를 작성하는 것과 비슷하기 때문에 보기에 쉽고 익숙하다.
//  일반 HTML 태그를 사용할 수 있을 뿐만 아니라, 컴포넌트도 JSX안에서 작성할 수 있다.

export default function Jsx02(){
    const name = "김영수"
    return (
        <React.Fragment>
            <p>저의 이름은 {name}입니다.</p>
        </React.Fragment>//<> </> <= 같음     //   {} <= 자바스크립트 문법으로 바꾸겠다는 뜻
    )
}