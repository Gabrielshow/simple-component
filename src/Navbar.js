import React from "react";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <i className="fas fa-home"></i>Home
        </li>
        <li>
          <i className="fas fa-user-alt"></i>About
        </li>
        <li>
          <i className="fas fa-envelope"></i>Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
