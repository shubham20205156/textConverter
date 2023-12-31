import React from 'react'
import PropTypes from 'prop-types'
//import { a } from 'react-router-dom'
import { Link } from 'react-router-dom';



export default function Navbar(props) {
  return (
    <div>
      
      <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
        <Link className="navbar-brand" to="/"><strong>{props.title}</strong></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-a" to="/">Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-a mx-2" to="/about">{props.aboutText}</Link>
            </li>

          </ul>

          <h5>modes-</h5>
          {/* in below lines function will take some value and perform their work  */}

          <button type="button" onClick={()=>{props.toggleMode('success')}} class={`btn btn-success mx-2 `}>Green </button>
          <button type="button" onClick={()=>{props.toggleMode('danger')}} class={`btn btn-danger mx-2 `}>Red</button>
          <button type="button" onClick={()=>{props.toggleMode('primary')}} class={`btn btn-primary mx-2 `}>Blue</button>
          <button type="button" onClick={()=>{props.toggleMode('secondary')}} class={`btn btn-secondary mx-2 `}>Grey</button>
          <button type="button" onClick={()=>{props.toggleMode('light')}} class={`btn btn-light mx-2 border-dark`}>Light</button>
          <button type="button" onClick={()=>{props.toggleMode('dark')}} class={`btn btn-dark mx-2 `}>Dark Mode</button>
          {/* in below line function only work their task without taking any arguments  */}
          {/* <button type="button" onClick={props.toggleMode} class={`btn btn-${props.BtnDarkModeColor2} mx-2 `}>{props.BtnDarkMode}</button> */}
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

