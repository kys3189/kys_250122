// 1. 컨텍스트 생성 및 초기화
// 2. Provider 생성 및 value 값을 넘겨준다.
// animals 초기값 ["누렁이", "점박이", "얼룩이"]
// insert, remove
// 3. context, provider 내보낸다.

import { createContext, useState } from "react";

const AnimalsContext = createContext({
  state : { animals : [] },
  actions : { insert : () => {}, remove : () => {} }
})

const AnimalsProvider = ({children}) => {
  const [animals, setAnimals] = useState(["누렁이", "야옹이", "얼룩이"])
  const insert = (animal) => { setAnimals(animals.concat(animal) )}
  const remove = (index) => { setAnimals(animals.filter((animal, i) => i !== index))}  
  const value = {
    state : { animals : animals },
    actions : { insert : insert , remove }
  }

  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )
}

export { AnimalsContext, AnimalsProvider}