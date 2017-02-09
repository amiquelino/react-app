const dispatchHelper = (type, payload) => ({
  type: type,
  payload: payload
})

export const onLoadPage = ( type ) => ( dispatch, getState ) => {
  const state = getState()
  let url = 'http://pokeapi.co/api/v2/pokemon/'

  switch (type) {
    case 'ON_PREVIOUS':
      url = state.pokemons.previous
      dispatch(dispatchHelper( type , url ))
      break;
    case 'ON_NEXT':
      url = state.pokemons.next
      dispatch(dispatchHelper( type , url ))
      break;
    default:
      dispatch(dispatchHelper( type , url ))
  }

  fetch(url)
  .then((response) => response.json())
  .then(responseJson => responseJson)
  .then((response) => {
    dispatch(dispatchHelper( 'ON_LOAD_PAGE' , response ))
  })
}

export const getPokemon = ( url ) => ( dispatch ) => {
  debugger
  fetch(url)
  .then((response) => response.json())
  .then(responseJson => responseJson)
  .then((response) => {
    dispatch(dispatchHelper( 'GET_POKEMON' , response ))
  })
}
