import React from 'react'
import {Button, Pager} from 'react-bootstrap'

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
  previous: React.PropTypes.string,
  next: React.PropTypes.string,
  previousOnClick: React.PropTypes.func.isRequired,
  nextOnClick: React.PropTypes.func.isRequired,
}

export default PokemonPager
