import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
 // style = {mystyle}
  

    return (
       <div className="container" style={props.setStyle}>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav" style={props.setStyle}>
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">{props.homeText}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">{props.feature}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/">Disabled</a>
      </li>
    </ul>
  </div>
  <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={props.changeeve} />
      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode Enabled/Disabled</label>
   </div>
</nav></div>
    )
}
Navbar.prototype={homeText:PropTypes.string.isRequired,
    feature:PropTypes.string, };
    Navbar.defaultProps={
      
        feature:"justdefault"

    };