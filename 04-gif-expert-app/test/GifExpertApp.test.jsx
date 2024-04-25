import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {

  test('debe de llamar almenos una vez onAddCategory', () => {

    const inputValue = 'One Punch'
    const onAddCategory = jest.fn(inputValue)

    render( <GifExpertApp /> )

    expect( onAddCategory ).toHaveBeenCalledTimes(1)
  })
})
