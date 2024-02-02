import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({ value }) => {
  const [ counter, setCounter ] = useState(value)

  const handleAdd = () => {
    // setCounter(counter + 1)
    setCounter((c) => c + 1) // la c tiene el valor actual del counter
  }

  const handleSubtract = () => {
    setCounter((c) => c - 1)
  }

  const handleReset = () => {
    setCounter(value)
  }

  return (
    <section className="container">
      <h1>Counter App</h1>
      <h3 className="counter">{ counter }</h3>
      <div className="container-buttons">
        <button
          type="button"
          onClick={ handleAdd }
        >
          +1
        </button>
        <button
          type="button"
          onClick={ handleSubtract }
        >
          -1
        </button>
        <button
          type="button"
          onClick={ handleReset }
        >
          reset
        </button>
      </div>
    </section>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}

CounterApp.defaultProps = {
  value: 0
}
