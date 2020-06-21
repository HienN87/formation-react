import React, { Component } from 'react'

class CompoCycleDevie extends Component {
  constructor(props) {
    super(props);
    console.log("je passe ds le constructor");
  }

  componentWillMount() {
    console.log("je passe ds le compo willmount");
  }

  render() {
    console.log("je passe ds le compo render");
    return (
      <div>
      </div>
    )
  }

  componentDidMount() {
    console.log("je passe ds le compo didMount");
  }
  componentWillReceiveProps() {
    console.log("je passe ds le compo willRecieve");
  }
  shouldComponentUpdate() {
    console.log("je passe ds le compo willRecieve");
  }
  componentWillUpdate() {
    console.log("je passe ds le compo willUpdate");
  }
  componentDidUpdate() {
    console.log("je passe ds le compo didUpdate");
  }
}

export default CompoCycleDevie;
