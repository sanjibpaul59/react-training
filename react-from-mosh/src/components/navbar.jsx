import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <h3 className="navbar-brand">
            Navbar 
          <span className="badge badge-pill badge-success ml-2">{this.props.totalCounters}</span>
          </h3>
        </div>
      </nav>
    );
  }
}

export default Navbar;
