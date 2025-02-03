import React, { Component } from 'react';

class LifeCycleComponent extends Component {

  //컴포넌트 상태 초기화, 초기값을 지정
  state = {
    number : 0,
    color : null
  }
  
  //아래 div 요소의 참조값에 접근하기 위한 저장용 변수
  colorRef = null;

  //버튼 클릭시 실행되는 메서드, 상태의 넘버값을 1씩 증가
  onClickToIncrease = () => {
    this.setState({
      number : this.state.number + 1
    })
  }

  //생성자 메서드, 컨테이너에서 전달받은 props를 초기화
  constructor(props){
    super(props)
    console.log("constructor", props)
  }

  //정적 메서드, 새로운 props값이 전달될 때 호출, 현재 컴포넌트의 이전 상태 
  static getDerivedStateFromProps(nextProps, prevState){
    console.log("getDerivedStateFromProps", nextProps, prevState)
    // 다음에 외부에서 받는 값의.컬러가, 같지 않으면, = 현재 컴포넌트의 이전 컬러값 
    if(nextProps.color !== prevState.color){
      // 컬러에 외부컬러값을 입력
      return { color : nextProps.color }
    }
    //아니라면 null값을 내보낸다.
    return null;
  }

  //정적 메서드 
  //컴포넌트가 화면에 출력된 직후 출력되는 메서드 초기 데이터를 가져오기 위해 사용됨
  componentDidMount(){
    console.log("componentDidMount 마운트 직후")
  }

  //업데이트 조건 제어
  //상태가 업데이트 되면 호출, 넘버값이 5의 배수일 경우 렌더링을 방지
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate", nextProps, nextState)
    return nextState.number % 5 !== 0;
  }

  //업데이트 전에 스냅샷 저장
  //DOM이 업데이트 되기 직전에 호출
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate", prevProps, prevState)
    if(prevProps.color !== this.props.color){
      return this.color.style.backgroundColor
    }
    return null
  }

  //업데이트 후에 호출 
  componentDidUpdate(prevProps, prevState, snapShot){
    if(prevState){
      console.log(`업데이트 직전 state : ${prevState}`)
    } 
    if(snapShot){
      console.log(`업데이트 직전 색상 ${snapShot}`)
    }
  }

  //렌더값
  render() {
    return (
      <div>
        <div 
          ref={(el) => this.colorRef = el }
          style={{
          width : "100px",
          height : "100px",
          backgroundColor : this.state.color,
          display : "flex",
          justifyContent : "center",
          alignItems : "center",
          color : "#000"
        }}>
          <h1>{this.state.number}</h1>
        </div>
        <button onClick={this.onClickToIncrease}>더하기 버튼</button>
      </div>
    );
  }
}

export default LifeCycleComponent;