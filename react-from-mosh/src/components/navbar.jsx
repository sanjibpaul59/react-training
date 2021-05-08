import React from 'react';

const Navbar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <h3 className="navbar-brand">
          Navbar
          <span className="badge badge-pill badge-success ml-2">
            {totalCounters}
          </span>
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;
