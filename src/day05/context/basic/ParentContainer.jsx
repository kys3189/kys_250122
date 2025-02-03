import React from 'react';
import ChildContainer from './ChildContainer';
import { FontSizeProvider } from './FontContext';

const ParentContainer = () => {
  return (
    <FontSizeProvider>
      <ChildContainer />
    </FontSizeProvider>
  );
};

export default ParentContainer;