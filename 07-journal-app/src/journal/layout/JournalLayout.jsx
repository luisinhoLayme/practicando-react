import PropTypes from 'prop-types'
import { useState } from 'react'
import { Navbar, Sidebar } from '../components';

export const JournalLayout = ({ children }) => {
  const [buttonBurger, setButtonBurger] = useState(false)

  return (
    <section
      className="grid md:grid-cols-[1fr_3fr] grid-rows-[40px_1fr] min-h-screen"
    >
      <Navbar
        setButtonBurger={setButtonBurger}
        buttonBurger={buttonBurger}
      />
      <Sidebar
        buttonBurger={buttonBurger}
      />

      <main className="p-4 border-[1px] row-[2/3] col-[1/3] md:col-[2/3]">
        {children}
      </main>
    </section>
  )
}

JournalLayout.propTypes = {
  children: PropTypes.array,
}
