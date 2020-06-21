import React, { Component } from 'react'
import JeuxCategory from './jeuxCategory'
import JeuRow from './JeuRow'

class JeuxTable extends Component {
  constructor(props) {
    super(props);
    console.log("JeuxTable les jeux ", props.jeux);
  }

  render() {
    const filterText = this.props.filterText;
    const instockOnly = this.props.instockOnly;
    let lastCategory;
    const rows = [];

    this.props.jeux.forEach(jeu => {
      console.log("jeu", jeu.name)
      if (jeu.name.toLowerCase().toUpperCase().indexOf(filterText) === -1) {
        return;
      }

      if (instockOnly && !jeu.stocked) {
        return;
      }

      if (jeu.category !== lastCategory) {
        rows.push(<JeuxCategory category={jeu.category} />)
      }

      rows.push(<JeuRow key={jeu.name} jeu={jeu} />);
      lastCategory = jeu.category;
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <JeuxCategory />
            {rows}
          </tbody>

        </table>
      </div>
    )
  }
}

export default JeuxTable;
