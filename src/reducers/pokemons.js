const initialState = {
  dataset: {},
}

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_POKEMONS':
      return{
        ...state,
        dataset: action.payload.results,
        count: action.payload.count,
        previous: action.payload.previous,
        next: action.payload.next
      }
    default:
      return state
  }
}

export default pokemons
