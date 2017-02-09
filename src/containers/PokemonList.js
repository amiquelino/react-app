import React from 'react'
import { connect } from 'react-redux'
import { onLoadPage } from '../actions/pokemon'
import PokemonListGroup from '../components/PokemonListGroup'

export const PokemonList = ({
  pokemons,
  previous,
  next,
  onPrevious,
  onNext
}) => (
  <PokemonListGroup
    dataset={pokemons}
    previous={previous}
    next={next}
    previousOnClick={onPrevious}
    nextOnClick={onNext} />
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
