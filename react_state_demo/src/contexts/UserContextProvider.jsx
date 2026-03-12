import { useState } from "react"
import { UserContext } from "./UserContext"

function UserContextProvider({ children }) {

  const [user, setUser] = useState({ name: "Guest", email: "guest@example.com" })

  const changeUser = () => {
    setUser({ name: "Chethana", email: "chethana@example.com" })
  }

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider