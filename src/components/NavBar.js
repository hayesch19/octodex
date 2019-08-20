import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-left">
          <h1 className="hero-nav-item">Octodex</h1>
          <h2 className="nav-item home">Home</h2>
          <h2 className="nav-item">FAQ</h2>
        </div>
        <div className="nav-right">
          <h2 className="nav-item">Follow us on Twitter</h2>
          <h2 className="nav-item">Back to Github.com</h2>
        </div>
      </nav>
    )
  }
}

export default NavBar
