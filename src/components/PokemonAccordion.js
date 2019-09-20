import React from 'react'
import {Panel, Grid, Row, Col, Badge} from 'react-bootstrap'
import PropTypes from 'prop-types'

const PokemonAccordion = ( props ) => {
  return (
    <div>
      {props.dataset.map((pokemon) => {
        return (
          <Panel  collapsible expanded={props.selected.name && props.selected.name === pokemon.name}
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
                <Col xs={2} md={1}><Badge>{props.selected.base_experience}</Badge></Col>
                <Col xs={2} md={1}><Badge>{props.selected.height}</Badge></Col>
                <Col xs={2} md={1}><Badge>{props.selected.weight}</Badge></Col>
                <Col xs={2} md={1}><Badge>{props.selected.order}</Badge></Col>
              </Row>
            </Grid>
         </Panel>
         
        )
      })}
    </div>
  )
}

PokemonAccordion.propTypes = {
  dataset: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
}




export default PokemonAccordion
