import React from 'react'
import renderer from 'react-test-renderer'
import PokemonListGroup from '../PokemonListGroup'

describe('PokemonListGroup', ( ) => {
  const pokemons = [
    {
      "url" : "http://pokeapi.co/api/v2/pokemon/1/",
      "name":"bulbasaur"
    },
    {
      "url" : "http://pokeapi.co/api/v2/pokemon/2/",
      "name" : "ivysaur"
    }
  ]

  it('render correctly', ( ) => {
    const component = renderer.create(
      <PokemonListGroup
        dataset={pokemons}
        next={'http://pokeapi.co/api/v2/pokemon/?offset=20'}
        previous={null}
        previousOnClick={jest.fn()}
        nextOnClick={jest.fn()}
      />
    )
    expect( component ).toMatchSnapshot( )
  })
})
