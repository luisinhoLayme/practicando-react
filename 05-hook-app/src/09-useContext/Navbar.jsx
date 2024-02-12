import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home </Link>
      <NavLink className={({isActive}) => isActive ? 'active' : '' } to="about">About</NavLink>
      <NavLink className={ ({isActive}) => isActive ? 'active' : ''} to="login"> Login</NavLink>
    </nav>
  )
}
