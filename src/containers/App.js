import React from 'react'
import logo from '../logo.svg'
import '../App.css';
import PokemonList from './PokemonList'
const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}
const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Catálogo de Pokémons</h2>
    </div>
    <p className="App-intro">
      Saiba mais sobre os Pokémonss.
    </p>
    <div className="well" style={wellStyles}>
      <PokemonList/>
    </div>
  </div>
)

export default App;
