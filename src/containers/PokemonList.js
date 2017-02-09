import React from 'react'
import { connect } from 'react-redux'
import { onLoadPage, getPokemon } from '../actions/pokemon'
import PokemonAccordion from '../components/PokemonAccordion'
import PokemonPager from '../components/PokemonPager'

export const PokemonList = ({
  pokemons,
  onSelect,
  selected,
  previous,
  next,
  onPrevious,
  onNext
}) => (
  <div>
    <PokemonAccordion dataset={pokemons} onSelect={onSelect} selected={selected}/>
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
    selected: state.pokemons.selected,
    previous: state.pokemons.previous,
    next: state.pokemons.next
  }),
  ( dispatch) => ({
    onSelect: (eventKey, e ) => dispatch(getPokemon(eventKey)),
    onPrevious: ( previous) => dispatch(onLoadPage('ON_PREVIOUS')),
    onNext: ( next ) => dispatch(onLoadPage('ON_NEXT'))
  })
)( PokemonList )
