const receiveRegions = (payload) => ({
  type: 'RECEIVE_POKEMONS',
  payload: payload
})

export const getPokemons = () => dispatch => {
  fetch('http://pokeapi.co/api/v2/pokemon/')
  .then((response) => response.json())
  .then(responseJson => responseJson)
  .then((response) => {
    dispatch(receiveRegions(response))
  })
  .catch(( error ) => {
      console.error( error )
  })
}
