import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'
import { UserContext } from '../contexts/UserContext'

function C() {
  const counterCtx = useContext(CounterContext) || {}
  const { counter2, changeCounter2 } = counterCtx
  const userCtx = useContext(UserContext) || {}
  const { user, changeUser } = userCtx

  return (
    <div className="p-4 m-2 border text-center">
      <h2 className="text-lg font-bold mb-2">C Component</h2>
      <p>Counter2: {counter2}</p>
      <button className="bg-blue-200 p-2 m-1" onClick={changeCounter2}>Change Counter2</button>
      <p>User: {user?.name} {user?.email ? `(${user.email})` : ''}</p>
      <button onClick={changeUser} className="bg-blue-300 p-2 m-1">Change User</button>
    </div>
  )
}

export default C