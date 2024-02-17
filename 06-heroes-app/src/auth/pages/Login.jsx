import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const Login = () => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Luisinho Layme')

    navigate(lastPath, { replace: true })
  }

  return (
    <section>
      <h3>Login</h3>
      <button
        className="button"
        onClick={ onLogin }
      >
        Login
      </button>
    </section>
  )
}
