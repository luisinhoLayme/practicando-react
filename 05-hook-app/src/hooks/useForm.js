import { useState } from 'react'

export const useForm = ( initialForm = {} ) => {
  const [ formState, setFormState ] = useState(initialForm)


  const onIputChange = ({target}) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    onIputChange,
    onResetForm
  }
}
