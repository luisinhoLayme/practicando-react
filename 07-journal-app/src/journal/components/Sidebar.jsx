import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { SideBarItem } from './SideBarItem'

export const Sidebar = ({ buttonBurger }) => {

  const { displayName } = useSelector( state => state.auth )
  const { notes } = useSelector( state => state.journal)

  const menu = buttonBurger ? 'translate-x-[0] transition-transform  backdrop-blur-md text-primary' : ' transition-transform translate-x-[-100%]'

  return (
    <aside
      className={ `${menu} md:translate-x-[unset]  z-10  md:block row-[2/3] col-[1/2] md:col-[1/2] md:row-[1/-1] max-w-[300px] overflow-hidden` }
    >
      <h3 className="min-h-[40px] text-center leading-[40px]">{ displayName }</h3>
      <nav className="grid gap-1 p-[0_.2rem] max-h-[90vh] md:max-h-[95vh] overflow-x-auto">
        {notes.map(note => (
          <SideBarItem
            key={note.id}
            {...note}
          />
        ))}
      </nav>
    </aside>
  )
}

Sidebar.propTypes = {
  buttonBurger: PropTypes.bool.isRequired
}
