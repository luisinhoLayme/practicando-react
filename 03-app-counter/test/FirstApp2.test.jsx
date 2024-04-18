import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

  const title = 'Hola Luisinho'
  const def = 444

  test('debe de hacer con el snapshot', () => {

    const { container } = render( <FirstApp title={title} /> )
    expect( container ).toMatchSnapshot()

  });

  test('debe mostrar el mensaje "Hola Luisinho"', () => {

    render( <FirstApp title={title} /> )
    expect(screen.getByText(title)).toBeTruthy()
    // screen.debug()

  })

  test('debe de mostrar el titulo en un h1', () => {

    render(
      <FirstApp
        title={title}
      />
    )

    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(title)

  })

  test('debe de mostrar el subtitulo enviado por props', () => {

    render(
      <FirstApp
        title={ title }
        def= { def }
      />
    )

    expect( screen.getAllByText( def ).length ).toBe(2)

  })

})
