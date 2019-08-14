import React from "react";

function Nav() {
  return (
    <div>
      <h1>College Athletics Recruiting</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sports
            </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Women's Basketball</a>
                <a className="dropdown-item" href="#">Women's Volleyball</a>
                <a className="dropdown-item" href="#">Women's Track and Field</a>
                <a className="dropdown-item" href="#">Women's Softball</a>
                <a className="dropdown-item" href="#">Football</a>
                <a className="dropdown-item" href="#">Men's Basketball</a>
                <a className="dropdown-item" href="#">Men's Baseball</a>
                <a className="dropdown-item" href="#">Men's Volleyball</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">New Athletes</a>
            </li>
          </ul>
          <li className="nav-link">
            <a className="nav-link" href="#">Create a New Profile</a>
          </li>
          <li className="nav-link">
            <a className="nav-link" href="#">My Profile</a>
          </li>
          <li className="nav-link">
            <a className="nav-link" href="#">Login</a>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
