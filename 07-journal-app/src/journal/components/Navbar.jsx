import { CiLogout, CiMenuFries } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { MdClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth/thunks'

export const Navbar = ({ setButtonBurger, buttonBurger }) => {

  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch( startLogout() )
  }

  return (
    <header
      className="bg-primary text-white grid gap-3 grid-cols-[max-content_1fr_max-content] justify-between items-center p-[0_.7rem] col-[1/3] md:gap-0 md:col-[2/3]"
    >
      {buttonBurger
        ? <MdClose
          onClick={() => setButtonBurger(b => !b)}
        />
        : <CiMenuFries
          onClick={() => setButtonBurger(b => !b)}
          className="stroke-1 hover:stroke-2 md:hidden"
        />}


      <Link className="justify-self-start" to="/">Journal App</Link>
      <button
        className="text-red-400 md:justify-self-end"
        type="button"
        onClick={ onLogout }
      >
        <CiLogout className="stroke-2" />

      </button>
    </header>
  )
}

Navbar.propTypes = {
  setButtonBurger: PropTypes.func.isRequired,
  buttonBurger: PropTypes.bool.isRequired
}

