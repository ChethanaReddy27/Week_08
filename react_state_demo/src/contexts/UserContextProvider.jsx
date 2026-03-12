import React from 'react'
import { UserContext } from './UserContext'
import { useState } from 'react'

function UserContextProvider({children}) {
    const [user, setUser] = useState({
        name: 'Ravi',
        age: 20,
        email: 'ravi@mail.com'
    })

    const changeUser = () => {
        let newUser = {...user, name: 'Ramu'}
        setUser(newUser)
    }

  return (
    <div>
        <UserContext.Provider value={{user, changeUser}}>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default UserContextProvider