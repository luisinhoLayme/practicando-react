import { useRef } from "react"

export const FocusScreen = () => {
  const inputRef = useRef()

  const onClick = () => {
    // document.querySelector('input').select()
    // console.log(inputRef)
    inputRef.current.select()
  }

  return (
    <div>
      <h2>Focus Screen</h2>
      <hr/>

      <input ref={ inputRef } type="text" placeholder="focu here" />

      <button
        onClick={ onClick }
      >set focus</button>
    </div>
  )
}
