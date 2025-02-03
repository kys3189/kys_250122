import React from 'react';
import Animals from './Animals';
import { AnimalsProvider } from './AnimalsContext';

// provider로 context 제공
const AnimalsContainer = () => {
  return (
    <AnimalsProvider>
      <Animals />
    </AnimalsProvider>
  );
};

export default AnimalsContainer;