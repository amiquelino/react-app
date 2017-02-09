import React from 'react'
import { connect } from 'react-redux'
import { onLoadPage } from '../actions/pokemon'
import PokemonListGroup from '../components/PokemonListGroup'
import PokemonPager from '../components/PokemonPager'

export const PokemonList = ({
  pokemons,
  previous,
  next,
  onPrevious,
  onNext
}) => (
  <div>
    <PokemonListGroup dataset={pokemons} />
    <PokemonPager
      previous={previous}
      next={next}
      previousOnClick={onPrevious}
      nextOnClick={onNext} />
    </div>
)
export default connect(
  ( state ) => ({
    pokemons: state.pokemons.dataset,
    previous: state.pokemons.previous,
    next: state.pokemons.next
  }),
  ( dispatch) => ({
    onPrevious: ( previous) => dispatch(onLoadPage('ON_PREVIOUS')),
    onNext: ( next ) => dispatch(onLoadPage('ON_NEXT'))
  })
)( PokemonList )
