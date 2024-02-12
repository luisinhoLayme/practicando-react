import { memo } from "react"
import PropTypes from 'prop-types'

// eslint-disable-next-line react/display-name
export const Small = memo(({ value }) => {
  console.log('me volvi a generar :)')

  return (
    <small>
      { value }
    </small>
  )
})

Small.propTypes = {
  value: PropTypes.number
}
