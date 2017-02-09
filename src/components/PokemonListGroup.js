import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
const PokemonListGroup = ( props ) => {

  return (
    <ListGroup >
      {props.dataset.map((pokemon) => {
        return (
          <ListGroupItem href={pokemon.url} key={pokemon.name}> {pokemon.name} </ListGroupItem>
        )
      })}
    </ListGroup>
  )
}

PokemonListGroup.propTypes = {
  dataset: React.PropTypes.array.isRequired
}

export default PokemonListGroup
