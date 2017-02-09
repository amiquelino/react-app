import React from 'react'
import logo from '../logo.svg'
import '../App.css';
import PokemonList from './PokemonList'
import { Jumbotron } from 'react-bootstrap'

const App = () => (
  <div className="container">
    <Jumbotron>
      <h1>Catálogo de Pokémons <img src={logo} className="App-logo" alt="logo" /></h1>
      <p>Saiba mais sobre os Pokémons clicando em seu nome.</p>
    </Jumbotron>
    <div>
      <PokemonList/>
    </div>
  </div>
)

export default App;
