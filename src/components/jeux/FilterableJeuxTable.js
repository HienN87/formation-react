import React, { Component } from 'react'
import SearchCompo from './SearchCompo'
import JeuxTable from './JeuxTable'

class FilterableJeuxTable extends Component {
  constructor(props) {
    super(props);
    console.log("les jeux ", props.jeux);
    this.state = {
      filterText: '',
      instockOnly: false
    }
  }

  render() {
    return (
      <div>
        <SearchCompo
          filterText={this.state.filterText}
          instockOnly={this.state.instockOnly}
        />

        <JeuxTable
          jeux={this.props.jeux}
          filterText={this.state.filterText}
          instockOnly={this.state.instockOnly}
        />
      </div>
    )
  }
}

export default FilterableJeuxTable;
