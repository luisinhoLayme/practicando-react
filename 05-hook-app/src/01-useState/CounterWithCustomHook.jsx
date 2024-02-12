import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter()


  return (
    <div>
      <h2>Counter with hook: { counter }</h2>
      <hr />

      <button onClick={() => increment(5)}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => decrement(3)}>-1</button>
    </div>
  )
}
