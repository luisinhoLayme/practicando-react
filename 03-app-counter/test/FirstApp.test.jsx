import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

  // test('debe de hacer con el snapshot', () => {
  //
  //   const title = 'el pro'
  //   const { container } = render( <FirstApp title={title} /> )
  //
  //   expect( container ).toMatchSnapshot()
  //
  // });

  test('debe mostrar el titulo en un h1', () => {

    const title = 'Hola Luisinho'
    const { container, getByText, getByTestId } = render( <FirstApp title={title} /> )

    expect( getByText(title) ).toBeTruthy()

    // const h1 = container.querySelector('h1')
    // expect( h1.innerHTML ).toContain(title)
    expect( getByTestId('test-title').innerHTML ).toBe(title)

  })

  test('debe de mostrar el subtitulo eniado por props', () => {

    const title = 'Hola Luisinho'
    const def = 333
    const { container, getByText } = render(
      <FirstApp
        title={title}
        def={ def }
      />
    )

    expect( getByText(def) ).toBeTruthy()

  })

})
