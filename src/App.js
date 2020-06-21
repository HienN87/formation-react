import React, { Component } from 'react';
import './App.css';
import FilterableJeuxTable from './components/jeux/FilterableJeuxTable'

class App extends Component {

  render() {
    const JEUX = [];
    JEUX.push({ 'category': 'FPS', 'price': '10€', 'stocked': true, 'name': 'Counter Strike' });
    JEUX.push({ 'category': 'FPS', 'price': '40€', 'stocked': false, 'name': 'Battlefield' });
    JEUX.push({ 'category': 'FPS', 'price': '20€', 'stocked': true, 'name': 'Bioshock' });
    JEUX.push({ 'category': 'RPG', 'price': '20€', 'stocked': true, 'name': 'Final Fantasy 8' });
    JEUX.push({ 'category': 'Aventure', 'price': '15€', 'stocked': false, 'name': 'God of War' });
    JEUX.push({ 'category': 'Aventure', 'price': '60€', 'stocked': true, 'name': 'The Last of Us Part 2' });

    return (
      <div className="App">

        <FilterableJeuxTable jeux={JEUX} />

      </div>
    );
  }
}

export default App;
