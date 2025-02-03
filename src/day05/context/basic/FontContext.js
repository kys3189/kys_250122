
import { createContext, useState } from 'react'

// const FontContext = createContext({
//   fontSize : "2rem",
//   fontWeight : 500,
//   color : "blue"
// })

const FontContext = createContext({
  state : { fontSize : "", fontColor : "" },
  action : { setFontSize : () => {}, setFontColor : () => {}}
})

const FontSizeProvider = ({children}) => {
  const [fontSize, setFontSize] = useState("2rem");
  const [fontColor, setFontColor] = useState("red");
  const value = {
    state : { fontSize : fontSize,  fontColor: fontColor },
    action : { setFontSize : setFontSize, setFontColor: setFontColor }
  }

  return (
    <FontContext.Provider value={value}>
      {children}
    </FontContext.Provider>
  )
}

const FontSizeConsumer = FontContext.Consumer;

export {FontContext, FontSizeProvider, FontSizeConsumer};