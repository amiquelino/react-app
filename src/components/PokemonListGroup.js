import React from 'react'
import {ListGroup, ListGroupItem, Pager, Button} from 'react-bootstrap'
const PokemonListGroup = ( props ) => {
  return (
    <ListGroup >
      {props.dataset.map((pokemon) => {
        return (
          <ListGroupItem key={pokemon.name}> {pokemon.name} </ListGroupItem>
        )
      })}
      <Pager>
        <Button disabled={ !props.previous? true : false} onClick={props.previousOnClick}>Anterior</Button>
          {' '}
        <Button disabled={ !props.next? true : false } onClick={props.nextOnClick}>Próxima</Button>
      </Pager>
    </ListGroup>
  )
}

PokemonListGroup.propTypes = {
  dataset: React.PropTypes.array.isRequired,
  previous: React.PropTypes.string,
  next: React.PropTypes.string,
  previousOnClick: React.PropTypes.func.isRequired,
  nextOnClick: React.PropTypes.func.isRequired,
}

export default PokemonListGroup
