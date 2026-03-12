import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'
import {useTest} from '../store/TestStore'

function C() {

  //get state from zustand store
  const y = useTest(state => state.y)
  const incrementY = useTest(state => state.incrementY)
  
  //console.log(useTest(), x)

  const {counter1, changeCounter1} = useContext(CounterContext)
  console.log('C rendered')
  return (
    <div className="p-4 m-2 border text-center">
      <h2 className="text-lg font-bold mb-2">C component</h2>
      <p>Counter1: {counter1}</p>
      <button className="bg-blue-200 p-2 m-1" onClick={changeCounter1}>Change Counter1</button>
      <p>y: {y}</p>
      <button className="bg-blue-100 p-1 m-1 mt-2" onClick={incrementY}>Increment Y</button>
    </div>
  )
}

export default C