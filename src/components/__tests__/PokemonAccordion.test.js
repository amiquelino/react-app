import React from 'react'
import renderer from 'react-test-renderer'
import PokemonAccordion from '../PokemonAccordion'

describe('PokemonAccordion', ( ) => {
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
      <PokemonAccordion
        dataset={pokemons}
      />
    )
    expect( component ).toMatchSnapshot( )
  })
})
