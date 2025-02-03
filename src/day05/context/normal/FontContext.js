import React, { createContext, useState } from 'react';

const FontSizeContext = createContext({
  state : { fontSize : "" },
  action : { setFontSize : () => {}}
})

const FontSizeProvider = ({children}) => {
  const [fontSize, setFontSize] = useState("2rem")
  const value = {
    state : { fontSize },
    action : { setFontSize }
  }

  return (
    <FontSizeContext.Provider value={value}>
      {children}
    </FontSizeContext.Provider>
  )
}

const FontSizeConsumer = FontSizeContext.Consumer;

export { FontSizeContext, FontSizeProvider, FontSizeConsumer }