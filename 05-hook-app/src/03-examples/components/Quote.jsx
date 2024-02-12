import PropTypes from 'prop-types'
import { useState } from 'react'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'

export const Quote = ({ quote, author }) => {

  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const {width, height} = pRef.current.getBoundingClientRect()
    setBoxSize({width, height})

  }, [quote])

  return (
    <>
      <blockquote>
        <p>{quote}</p>
        <footer style={{ color: '#aaa', textAlign: 'right' }}>- <span ref={pRef}>{author}</span></footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}

Quote.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string
}
