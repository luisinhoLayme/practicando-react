import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {

  test('getImage debe de reotrnar un error si no hay apiKey', async () => {

    const resp = await getImagen()
    // expect(typeof url).toBe('string')
    expect(resp).toBe('No se encontro la imagen')

  });

})
