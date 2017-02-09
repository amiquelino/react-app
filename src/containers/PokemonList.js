import React from 'react'
import { connect } from 'react-redux'
import PokemonListGroup from '../components/PokemonListGroup'

export const PokemonList = ({
  pokemons
}) => (
  <PokemonListGroup dataset={pokemons} />
)
export default connect(
  ( state ) => ({
    pokemons: state.pokemons.dataset
  })
)( PokemonList )
