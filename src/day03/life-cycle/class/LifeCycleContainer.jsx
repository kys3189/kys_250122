import React, { Component } from 'react';
import LifeCycleComponent from './LifeCycleComponent';

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215 ).toString(16)
}

class LifeCycleContainer extends Component {

  // 부모의 초기 '상태'를 컬러 블랙으로 설정
  state = {
    color : "#000"
  }

  //버튼 클릭시 실행되는 임의명의 메소드
  onClickToChangeColor = () => {
    //컴포넌트의 상태를 업데이트합니다.
    this.setState({
      color : getRandomColor()
    })
    console.log(this.state.color)
  }
  //메서드, 컴포넌트가 화면에 렌더링될 때 호출
  render() {
    return (
      <div>
        {/* 버튼이 클릭할 때, 지정한 메소드 실행 */}
        <button onClick={this.onClickToChangeColor}>색상 변경</button>
        {/* 지정 컴포넌트 안에 컬러라는 이름에 속성을 전달 */}
        <LifeCycleComponent color={this.state.color} />
      </div>
    );
  }
}

export default LifeCycleContainer;