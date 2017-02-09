const initialState = {
  dataset: [],
  selected: {}
}

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_POKEMONS':
      return {
        ...state,
        dataset: action.payload.results,
        count: action.payload.count,
        previous: action.payload.previous,
        next: action.payload.next
      }
    case 'ON_LOAD_PAGE':
      return {
        ...state,
        dataset: action.payload.results,
        //count: action.payload.count,
        previous: action.payload.previous,
        next: action.payload.next
      }
    case 'GET_POKEMON':
      return {
        ...state,
        selected: action.payload
      }
    default:
      return state
  }
}

export default pokemons
