import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes'

describe('Pruebas en 08-imp-exp', () => {

  test('getHeroeById debe de retornar un heroe po ID', () => {

    const id = 1
    const hero = getHeroeById(id)

    expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )

  });

  test('getHeroeById debe de retornar undefined si no existe', () => {

    const id = 100
    const hero = getHeroeById(id)
    expect( hero ).toBeFalsy()

  });

  test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => {

    const heroes = getHeroesByOwner('DC')
    // console.log(heroes.length)
    expect( heroes.length ).toBe(3)
    expect( heroes ).toEqual(heroes.filter((heroe) => heroe.owner === 'DC' ))

  })

  test('getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel', () => {

    const heroes = getHeroesByOwner('Marvel')
    // console.log(heroes.length)
    expect( heroes ).toEqual(heroes.filter((heroe) => heroe.owner === 'Marvel' ))

  })
})
