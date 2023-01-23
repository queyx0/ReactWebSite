import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          QQX <i class="fa-solid fa-dungeon"></i>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
