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
const selected = {
  "id": 1,
   "name": "bulbasaur",
   "base_experience": 64,
   "height": 7,
   "is_default": true,
   "order": 1,
   "weight": 69,
}
  it('render correctly', ( ) => {
    const component = renderer.create(
      <PokemonAccordion
        dataset={pokemons}
        onSelect={jest.fn()}
        selected={selected}
      />
    )
    expect( component ).toMatchSnapshot( )
  })
})
