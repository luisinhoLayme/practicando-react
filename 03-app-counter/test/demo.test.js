
describe('Pruebas en <DemoComponent />', () => {

  test('Esta prueba no debe de fallar', () => {

    //TODO: 1. Inicializacion
    const message1 = 'Hola'

    //WARN: 2. Estumulo
    const message2 = message1.trim()

    //NOTE: 3. Observar el comportamiento... esperado
    expect(message1).toBe(message2)

  })

})

