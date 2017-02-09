const onLoad = (type, payload) => ({
  type: type,
  payload: payload
})

export const onLoadPage = ( type ) => ( dispatch, getState ) => {
  const state = getState()
  let url = 'http://pokeapi.co/api/v2/pokemon/'

  switch (type) {
    case 'ON_PREVIOUS':
      url = state.pokemons.previous
      dispatch(onLoad( type , url ))
      break;
    case 'ON_NEXT':
      url = state.pokemons.next
      dispatch(onLoad( type , url ))
      break;
    default:
      dispatch(onLoad( type , url ))
  }
  
  fetch(url)
  .then((response) => response.json())
  .then(responseJson => responseJson)
  .then((response) => {
    dispatch(onLoad( 'ON_LOAD_PAGE' , response ))
  })
}
