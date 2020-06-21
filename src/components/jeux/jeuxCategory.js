import React, { Component } from 'react'

class JeuxCategory extends Component {
  constructor(props) {
    super(props);
    console.log("Category ", props.category)
  }

  render() {
    return (
      <tr>
        <th colSpan="2">
          {this.props.category}
        </th>
      </tr>
    )
  }
}

export default JeuxCategory;
