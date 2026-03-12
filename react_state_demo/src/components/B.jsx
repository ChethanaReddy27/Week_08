import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'
import { UserContext } from '../contexts/UserContext'
import {useTest} from  '../store/TestStore.js'

function B() {

  const x = useTest(state => state.x)
  const incrementX = useTest(state => state.incrementX)
  const decrementX = useTest(state => state.decrementX)
  const incrementXByValue = useTest(state => state.incrementXByValue)

  let {counter1, changeCounter1} = useContext(CounterContext)
  let {user, changeUser} = useContext(UserContext)
  console.log('B rendered')
  return (
    <div className="p-4 m-2 border text-center">
      <h2 className="text-lg font-bold mb-2">B Component</h2>
      <p>Counter1: {counter1}</p>
      <p>User name: {user.name}</p>
      <p>email: {user.email}</p>
      <button className="bg-blue-200 p-2 m-1" onClick={changeCounter1}>Change Counter1</button>
      <button onClick={changeUser} className="bg-blue-300 p-2 m-1">Change User</button>
      <p>x: {x}</p>
      <div className="flex flex-row gap-2 justify-center">
        <button className="bg-blue-100 p-1 m-1" onClick={incrementX}>Increment X</button>
        <button className="bg-blue-100 p-1 m-1" onClick={decrementX}>Decrement X</button>
        <button className="bg-blue-100 p-1 m-1" onClick={() => incrementXByValue(20)}>Increment x by value</button>
      </div>
    </div>
  )
}

export default B