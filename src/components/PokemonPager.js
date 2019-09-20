import React from 'react'
import {Button, Pager} from 'react-bootstrap'
import PropTypes from 'prop-types'

const PokemonPager = (props ) => {
  return (
    <Pager>
      <Button disabled={ !props.previous? true : false} onClick={props.previousOnClick}>Anterior</Button>
        {' '}
      <Button disabled={ !props.next? true : false } onClick={props.nextOnClick}>Próxima</Button>
    </Pager>
  )
}

PokemonPager.propTypes = {
  previous: PropTypes.string,
  next: PropTypes.string,
  previousOnClick: PropTypes.func.isRequired,
  nextOnClick: PropTypes.func.isRequired,
}

export default PokemonPager
