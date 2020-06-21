import React, { Component } from 'react'
import JeuxCategory from './jeuxCategory'
import JeuRow from './JeuRow'

class JeuxTable extends Component {
  constructor(props) {
    super(props);
    console.log("JeuxTable les jeux ", props.jeux);
  }

  render() {
    const rows = [];
    this.props.jeux.forEach(jeu => {
      console.log("jeu", jeu.name)
      rows.push(<JeuRow key={jeu.name} jeu={jeu} />)
    });

    // rows.push(<JeuRow key="1" />);
    // rows.push(<JeuRow key="2" />);

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
            <JeuxCategory category={"FPS"} />
            {rows}
          </tbody>

        </table>
      </div>
    )
  }
}

export default JeuxTable;
