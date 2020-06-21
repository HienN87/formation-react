/**
 * @author HIEN
 * Premier composant state REACT
 * Version 1.0
 */
import React, { Component } from 'react'
import './StateCompo.css'

class StateCompo extends Component {
  constructor(props) {
    super(props);
    //console.log("label " + props.label);
    this.state = {
      nom: ''
    };
  }

  handleChange = (e) => {
    let valeur = e.target.value;
    console.log(valeur);
    this.setState({ nom: valeur });
    this.props.onInputChange(valeur);
  }

  render() {
    return (
      <div>
        <h6 className="state-h6">Compo State {this.props.label}</h6>
        <input type="text" value={this.state.nom} onChange={this.handleChange}></input>
      </div>
    )
  }
}

export default StateCompo;
