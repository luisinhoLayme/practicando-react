import clsx from 'clsx'
import { useMemo } from 'react'
import { CiCircleAlert } from 'react-icons/ci'
import { FaGoogle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks'
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from '../../store/auth'
import { AuthLayout } from '../layout/AuthLayout'

const formData = {
  email: '',
  password: '',
}

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const { email, password, onIputChange } = useForm(formData)

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (e) => {
    e.preventDefault()
    // console.log({ email, password })

    // No es esta la accion a despachar
    dispatch(startLoginWithEmailPassword({ email, password }))
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn')
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Login">
      <form className="mt-1 grid gap-2" onSubmit={onSubmit}>
        <div>
          <input
            type="email"
            placeholder="correo@gmail.com"
            className="input"
            name="email"
            value={email}
            onChange={onIputChange}
          />
        </div>
        <div className="">
          <input
            type="password"
            placeholder="*******"
            className="input"
            name="password"
            value={password}
            onChange={onIputChange}
          />
        </div>

        <div
          className={clsx(
            'text-[#F86767] bg-[#F7D1D1] p-2 rounded-md flex gap-1 items-center',
            { hidden: !!errorMessage === false }
          )}
        >
          {' '}
          <CiCircleAlert /> {errorMessage}
        </div>
        <div className="grid gap-1 md:grid-cols-2">
          <button
            disabled={isAuthenticating}
            className={`button ${isAuthenticating ? 'bg-[#C5DDE5]' : 'bg-primary'}`}
            type="submit"
          >
            Login
          </button>
          <button
            disabled={isAuthenticating}
            type="button"
            onClick={onGoogleSignIn}
            className={`flex justify-center items-center gap-2 button ${isAuthenticating ? 'bg-[#C5DDE5]' : 'bg-primary'}`}
          >
            <FaGoogle className="" /> Google
          </button>
        </div>
        <Link className="text-end text-sm text-primary" to="/auth/register">
          Crear una cuenta
        </Link>
      </form>
    </AuthLayout>
  )
}
