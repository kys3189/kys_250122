import React from 'react';
import Parent from './Parent';
import { FontSizeProvider } from './FontContext';

const NormalContainer = () => {
  return (
    <FontSizeProvider>
      <Parent />
    </FontSizeProvider>
  );
};

export default NormalContainer;