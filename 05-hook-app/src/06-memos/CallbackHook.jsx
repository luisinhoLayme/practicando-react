import { useState, useCallback } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
  const [ counter, setCounter ] = useState( 10 )

  const increment = useCallback((value) => {
    setCounter( c => c + value )
  }, [])

  // const increment = () => {
  //   setCounter( counter + 1 )
  // }

  return (
    <div>
      <h3>useCallbak hook: { counter }</h3>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  )
}
