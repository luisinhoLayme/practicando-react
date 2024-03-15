import { Link } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useState } from 'react'
import { CiCircleAlert } from 'react-icons/ci'
import { Input } from '../components'
import { useDispatch } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import clsx from 'clsx'

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener @'],
  password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 letras.'],
  displayName: [(value) => value.length >= 3, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useSelector( state => state.auth )
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const {
    formState, displayName, email, password, onIputChange, onResetForm,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!isFormValid) {
      setFormSubmitted(true)
      return;
    }
    // console.log(formState)
    dispatch( startCreatingUserWithEmailPassword(formState) )
      setFormSubmitted(false)
    // onResetForm()
  }

  return (
    <AuthLayout title="Crear Cuenta">
      {/* <h2>FormValid: { isFormValid ? <span className='text-green-400'>Valid</span> : <span className='text-red-400'>Invalid</span> }</h2> */}
      <form
        className="mt-1 grid gap-2"
        onSubmit={onSubmit}
      >
        <Input
          type="text"
          placeholder="Luisinho Layme"
          classname=""
          name="displayName"
          value={displayName}
          onChange={onIputChange}
          helpText={displayNameValid}
          formSubmitted={formSubmitted}
        />
        <Input
          type="email"
          placeholder="correo@gmail.com"
          name="email"
          classname=""
          value={email}
          onChange={onIputChange}
          helpText={emailValid}
          formSubmitted={formSubmitted}
        />
        <Input
          type="password"
          placeholder="*******"
          name="password"
          classname=""
          value={password}
          onChange={onIputChange}
          helpText={passwordValid}
          formSubmitted={formSubmitted}
        />

        <div
          className={
            clsx(
              "text-[#F86767] bg-[#F7D1D1] p-2 rounded-md flex gap-1 items-center",
               { 'hidden': !!errorMessage === false },
            )
          }
        > <CiCircleAlert /> { errorMessage }</div>
        <div className="grid gap-1">
          <button disabled={ isCheckingAuthentication } className="button bg-primary" type="submit">Crear cuenta</button>
        </div>
        <div className="flex justify-end">
          <p className="text-sm mr-1">Ya tienes cuenta?</p>
          <Link className="text-end text-sm text-primary" to="/auth/login">Iniciar</Link>
        </div>
      </form>
    </AuthLayout>
  )
}
