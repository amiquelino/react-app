import React from 'react'
import {Accordion, Panel, Grid, Row, Col} from 'react-bootstrap'
const PokemonAccordion = ( props ) => {
  return (
    <Accordion >
      {props.dataset.map((pokemon) => {
        return (
          <Panel
            header={pokemon.name}
            eventKey={pokemon.url}
            key={pokemon.name}
            onSelect={props.onSelect}>
            <Grid>
              <Row className="show-grid">
                <Col xs={3} md={2}><b>{'Nome: '}</b></Col>
                <Col xs={2} md={1}><b>{'CP: '}</b></Col>
                <Col xs={2} md={1}><b>{'Altura: '}</b></Col>
                <Col xs={2} md={1}><b>{'Peso: '}</b></Col>
                <Col xs={2} md={1}><b>{'Ordem: '}</b></Col>
              </Row>
              <Row className="show-grid">
                <Col xs={3} md={2}>{props.selected.name}</Col>
                <Col xs={2} md={1}>{props.selected.base_experience}</Col>
                <Col xs={2} md={1}>{props.selected.height}</Col>
                <Col xs={2} md={1}>{props.selected.weight}</Col>
                <Col xs={2} md={1}>{props.selected.order}</Col>
              </Row>
            </Grid>
         </Panel>
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
