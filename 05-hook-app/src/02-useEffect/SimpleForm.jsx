import { useEffect } from "react"
import { useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

  const [ formState, setFormState ] = useState({
    username: 'Luisinho',
    email: 'luisinho@gmail.com'
  })

  const {username, email} = formState

  const onIputChange = ({target}) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  useEffect(() => {
    // console.log('useEffect')
  }, [])

  useEffect(() => {
    // console.log('useEffect formState')
  }, [formState])

  useEffect(() => {
    // console.log('useEffect email')
  }, [email])

  return (
    <div>
      <h1>Form simple</h1>
      <hr />
      <input
        type="text"
        className="input"
        placeholder="Luisinho231"
        name="username"
        value={username}
        onChange={onIputChange}
      />
      <input
        type="email"
        className="input"
        placeholder="luisinho@google.com"
        name="email"
        value={email}
        onChange={onIputChange}
      />
      {username === 'Luisinho2' && <Message />}
    </div>
  )
}
