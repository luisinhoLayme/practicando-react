import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {
  const {formState, onIputChange, onResetForm, username, email, password} = useForm({
    username: '',
    email: '',
    password: ''
  })

  // const {username, email, password} = formState
  return (
    <div>
      <h1>Form custom hook</h1>
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
      <input
        type="password"
        className="input"
        placeholder="*******"
        name="password"
        value={password}
        onChange={onIputChange}
      />
      <button onClick={ onResetForm }>Reset</button>
    </div>
  )
}
