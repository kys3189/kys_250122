import React, { Component } from 'react';

class LifeCycleComponent extends Component {

  state = {
    number : 0,
    color : null
  }
  
  colorRef = null;

  onClickToIncrease = () => {
    this.setState({
      number : this.state.number + 1
    })
  }

  constructor(props){
    super(props)
    console.log("constructor", props)
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log("getDerivedStateFromProps", nextProps, prevState)
    if(nextProps.color !== prevState.color){
      return { color : nextProps.color }
    }
    return null;
  }

  componentDidMount(){
    console.log("componentDidMount 마운트 직 후")
  }
  
  // 업데이트
  // 조건식이 true만 업데이트!
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate", nextProps, nextState)
    return nextState.number % 5 !== 0;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate", prevProps, prevState)
    if(prevProps.color !== this.props.color){
      return this.color.style.backgroundColor
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapShot){
    if(prevState){
      console.log(`업데이트 직전 state : ${prevState}`)
    } 
    if(snapShot){
      console.log(`업데이트 직전 색상 ${snapShot}`)
    }
  }

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