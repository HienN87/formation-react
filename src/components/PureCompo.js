/**
 * @author HIEN
 * Premier composant pure REACT
 * Version 1.0
 */
import React from 'react'
import './PureCompo.css'

export function PureCompo() {
  return (
    <div>
      <h6 className="pure-h6">Pure Compo</h6>
    </div>
  )
}

export function PureCompoPropos({ label, age }) {
  return (
    <div>
      <h6 className="pureprops-h6">Pure props Compo {label} tu as {age} ans</h6>
    </div>
  )
}

//export default PureCompo;