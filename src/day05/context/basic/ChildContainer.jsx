import React from 'react';
import { FontSizeConsumer } from './FontContext';
import ChildComponent from './ChildComponent';

const ChildContainer = () => {
  return (
    <div>
      <FontSizeConsumer>
      { (context) => (
        <>
          <h1 style={{fontSize : context.state.fontSize }}>반갑습니다😍</h1>
          <button onClick={() => { context.action.setFontSize("5rem") }}>커지게 하는 버튼</button>
        </>
      )}
      </FontSizeConsumer>
      <ChildComponent />
    </div>
  );
};

export default ChildContainer;