import React from 'react'
import renderer from 'react-test-renderer'
import PokemonPager from '../PokemonPager'

describe('PokemonPager', ( ) => {
  it('render correctly', ( ) => {
    const component = renderer.create(
      <PokemonPager
        next={'http://pokeapi.co/api/v2/pokemon/?offset=20'}
        previous={null}
        previousOnClick={jest.fn()}
        nextOnClick={jest.fn()}
      />
    )
    expect( component ).toMatchSnapshot( )
  })
})
