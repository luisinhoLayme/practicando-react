import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

  test('getUser debe de retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'Luisinho'
    }

    const user = getUser()

    expect(testUser).toEqual(user)

  });

  test('getUsuarioActivo debe de retornar un objeto', () => {
    const name = "Luisinho"

    const obj = {
      uid: 'ABC567',
      username: name
    }

    const userActive = getUsuarioActivo(name)

    expect(userActive).toEqual(obj)

  })

})
