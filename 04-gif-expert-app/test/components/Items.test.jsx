import { render, screen } from "@testing-library/react"
import { GifItem } from '../../src/components/Items'

describe('Pruebas en <Items.jsx />', () => {

  const title = 'Luisinho'
  const url = 'https://luisinho.dev/luisinho.jpg'

  test('debe de hacer el snapshot del componente', () => {

    const { container } = render(
      <GifItem
        title={title}
        url={url}
      />
    )
    expect(container).toMatchSnapshot()

  });

  test('debe de mostrar la imagen con el URL y al ALT indicado', () => {

    render(<GifItem title={title} url={url} />)
    // screen.debug()
    // expect( screen.getByRole('img').src ).toBe( url )
    // expect( screen.getByRole('img').alt ).toBe( title )
    const { src, alt } = screen.getByRole('img')
    expect( src ).toBe( url )
    expect( alt ).toBe( alt )

  })

  test('debe de mostrar el titulo en el componente', () => {

    render(<GifItem title={title} url={url} />)
    expect( screen.getByText( title ) ).toBeTruthy()

  })
})

