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

  handleFilterTextChange = (e) => {
    console.log("parent ", e);
    this.setState({ filterText: e });
  }

  handleInStockChange = (e) => {
    console.log("parent ", e);
    this.setState({ instockOnly: e });
  }

  render() {
    return (
      <div>
        <SearchCompo
          filterText={this.state.filterText}
          instockOnly={this.state.instockOnly}
          handleFilterTextChange={this.handleFilterTextChange}
          handleInStockChange={this.handleInStockChange}
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
