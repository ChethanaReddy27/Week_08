import React from 'react'
import { useContext, useRef, useEffect } from 'react'
import { CounterContext } from '../contexts/CounterContext'
import { UserContext } from '../contexts/UserContext'
import {useTest} from '../store/TestStore.js'
function A() {

  const inputRef = useRef(null)
  let {counter1, changeCounter1} = useContext( CounterContext )
  let {user, changeUser} = useContext(UserContext)
  let userObj = useTest(state => state.userObj)
  let updateObj = useTest(state => state.updateObj)
  let changeName = useTest(state => state.changeName)

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  console.log('A rendered')

  return (
    <div className="p-4 m-2 border text-center">
      <h2 className="text-lg font-bold mb-2">A component</h2>
      <p>Counter1: {counter1}</p>
      <p>User name: {user.name}</p>
      <p>email: {user.email}</p>
      <button className="bg-blue-200 p-2 m-1" onClick={changeCounter1}>Change Counter1</button>
      <button onClick={changeUser} className="bg-blue-300 p-2 m-1">Change User</button>
      <p>UserObj name: {userObj.name}</p>
      <p>UserObj age: {userObj.age}</p>
      <button onClick={updateObj} className="bg-blue-300 p-2 m-1">Change userObj Age</button>
      <button onClick={() => changeName('Bablu')} className="bg-blue-300 p-2 m-1">Change UserObj name</button>
      <input type="text" ref={inputRef} className="border p-1 mt-2" placeholder="useRef demo"/>
    </div>
  )
}

export default A