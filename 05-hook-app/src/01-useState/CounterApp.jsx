import { useState } from 'react'

export const CounterApp = () => {
  const [ counter, setCounter ] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })

  const { counter1, counter2, counter3 } = counter

  const onCounter = () => {
    setCounter({
      ...counter,
      counter1: counter1 + 1,
    })
  }

  return (
    <div>
      <h2>Counter1: { counter1 }</h2>
      <h2>Counter2: { counter2 }</h2>
      <h2>Counter3: { counter3 }</h2>
      <hr />
      <button onClick={ onCounter }>+1</button>
    </div>
  )
}
