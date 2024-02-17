import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { NavLink, Link } from "react-router-dom"
import { AuthContext } from "../../auth/context/AuthContext"

export const Navbar = () => {

  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__logo" to="/">Logo</Link>
        <NavLink
          className={({isActive}) => isActive ? 'active': ''}
          to="marvel"
        >Marvel</NavLink>
        <NavLink
          className={({isActive}) => isActive ? 'active': ''}
          to="dc"
        >Dc</NavLink>
        <NavLink
          className={({isActive}) => isActive ? 'active': ''}
          to="search"
        >Search</NavLink>
      </nav>
      <section className="header__section">
        <span>{ user?.name }</span>
        <button onClick={ onLogout }>Logout</button>
      </section>
    </header>
  )
}
