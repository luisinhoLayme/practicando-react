import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {
  const { user, setUser } = useContext( UserContext )

  return (
    <div>
      LoginPage
      <pre>
        { JSON.stringify(user, null, 3) }
      </pre>
      <button
        onClick={() => setUser({id: 232, name: 'luisinho', email: 'luisinho@luisinho.com'})}
      >Establecer usuario</button>
    </div>
  )
}
