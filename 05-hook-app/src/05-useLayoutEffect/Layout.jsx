import { useFetch, useCounter } from '../hooks'
import { LoadingQuote, Quote } from '../03-examples/components'

export const Layout = () => {

  const { counter, increment, decrement } = useCounter(1)

  const { data, isLoading, hasError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${counter}`)

  // undefined = undefined
  // !undefined = true
  // !!undefined = false
  // si la data tiene valor entonces toma el primer valor, para un array
  // data viene null por primera vez
  // console.log(data)
  // !!data ve si es true o false
  // const { author, quote } = !!data && data[0]

  const { body: quote, title: author } = !!data && data

  return (
    <div>
      <h2>Breaking Bad Api</h2>
      <hr />

      {isLoading
        ? <LoadingQuote />
        : <Quote
          quote={quote}
          author={author}
        />}

      <hr />
      <button onClick={() => decrement()} disabled={isLoading || counter <= 1}>prev quote</button>
      <button onClick={() => increment()} disabled={isLoading}>next quote</button>
    </div>
  )
}
