import React, { Component } from 'react'

class SearchCompo extends Component {
  constructor(props) {
    super(props);
    console.log("props filterText ", this.props.filterText);
    console.log("propos instockOnly ", this.props.instockOnly)
  }

  handleFilterText = (e) => {
    console.log(e.target.value);
  }

  handleInStockChange = (e) => {
    console.log(e.target.checked);
  }

  render() {
    return (
      <div>
        <input type="text"
          placeholder="Search"
          text={this.props.filterText}
          onChange={this.handleFilterText}
        />

        <input type="checkbox"
          onChange={this.handleInStockChange}
          checked={this.props.instockOnly}
        />

        {' '}

        Produit en stock seulement
      </div>
    )
  }
}

export default SearchCompo;
