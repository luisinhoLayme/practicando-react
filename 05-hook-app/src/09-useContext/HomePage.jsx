import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {
  const { user } = useContext(UserContext)

  return (
    <div>
      <h2>{user?.name}</h2>
    </div>
  )
}
