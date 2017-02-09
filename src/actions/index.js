const receivePokemons = (payload) => ({
  type: 'RECEIVE_POKEMONS',
  payload: payload
})

export const getPokemons = () => dispatch => {
  fetch('http://pokeapi.co/api/v2/pokemon/')
  .then((response) => response.json())
  .then(responseJson => responseJson)
  .then((response) => {
    dispatch(receivePokemons(response))
  })
  .catch(( error ) => {
      console.error( error )
  })
}
