import { useState } from "react"
import { useCounter } from "../hooks"
import { useMemo } from "react"

const heavyStuff = (iterationNumber = 5) => {
  for (let i = 0; i < iterationNumber;  i++) {
    console.log('Ahi vamos...')
  }

  return `${ iterationNumber } iteraciones realizadas`
}

export const MemorizeHook = () => {

  const { counter, increment } = useCounter(500)
  const [ show, setShow ] = useState(true)

  const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <div>
      <h2>Counter: <small>{counter}</small></h2>
      <hr />
      <h5>{ memorizeValue }</h5>

      <button onClick={() => increment()}>+1</button>
      <button onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
    </div>
  )
}
