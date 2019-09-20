import { combineReducers } from 'redux'
import pokemons from './pokemons'
import authentication from './authentication'
export default  combineReducers({
  pokemons,
  authentication
})
