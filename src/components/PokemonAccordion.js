import React from 'react'
import {Accordion, Panel} from 'react-bootstrap'
const PokemonAccordion = ( props ) => {
  return (
    <Accordion >
      {props.dataset.map((pokemon) => {
        return (
          <Panel  header={pokemon.name} eventKey={pokemon.url} key={pokemon.name} onSelect={props.onSelect}> {pokemon.name} </Panel>
        )
      })}
    </Accordion>

  )
}

PokemonAccordion.propTypes = {
  dataset: React.PropTypes.array.isRequired,
  onSelect: React.PropTypes.func.isRequired,
}

export default PokemonAccordion
