import { useState } from "react"
import { CounterContext } from "./CounterContext"

function CounterContextProvider({ children }) {

  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const changeCounter1 = () => {
    setCounter1(prev => prev + 1)
  }

  const changeCounter2 = () => {
    setCounter2(prev => prev + 1)
  }

  return (
    <CounterContext.Provider
      value={{ counter1, counter2, changeCounter1, changeCounter2 }}
    >
      {children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider