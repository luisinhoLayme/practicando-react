import { useState } from "react"
import { UserContext } from "./UserContext"
import PropTypes from 'prop-types'

// const user = {
//   id: 123,
//   name: 'Luisinho',
//   email: 'luisinho@gamil.com'
// }

export const UserProvider = ({ children }) => {
  const [ user, setUser ] = useState()
  return (
    <UserContext.Provider value={{ user, setUser}}>
      { children }
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.array
}


