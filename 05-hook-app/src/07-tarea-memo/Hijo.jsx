import PropTypes from 'prop-types'
import { memo } from 'react';

// eslint-disable-next-line react/display-name
export const Hijo = memo( ({ numero, incrementar }) => {

  console.log('  Me volví a generar :(  ');

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  )
})

Hijo.propTypes = {
  numero: PropTypes.number,
  incrementar: PropTypes.func
}
