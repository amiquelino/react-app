import React from 'react'
import {Accordion, Panel} from 'react-bootstrap'
const PokemonAccordion = ( props ) => {
  return (
    <Accordion >
      {props.dataset.map((pokemon) => {
        return (
          <Panel  header={pokemon.name} eventKey={pokemon.name} key={pokemon.name} > {pokemon.name} </Panel>
        )
      })}
    </Accordion>

  )
}

PokemonAccordion.propTypes = {
  dataset: React.PropTypes.array.isRequired,
}

export default PokemonAccordion
