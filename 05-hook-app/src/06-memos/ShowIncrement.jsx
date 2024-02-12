import PropTypes from 'prop-types'
import { memo } from 'react'

// eslint-disable-next-line react/display-name
export const ShowIncrement = memo( ({ increment }) => {
  console.log('Me volvi a generar :)')

  return (
    <button onClick={() => increment(5)}>
      Increment
    </button>
  )
})

ShowIncrement.propTypes = {
  increment: PropTypes.func
}
