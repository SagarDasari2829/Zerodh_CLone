import React from "react";
import { Link } from "react-router-dom";
import './index.css'
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="media/images/logo.svg" style={{width:"40%"}}/>
           
         </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto d-flex flex-row gap-5" style={{marginRight:"3rem"}}>
            <li class="nav-item" >
              <a href="/signup">Signup</a>
            </li>
            <li class="nav-item">
              <a href="/about"> About</a>
            </li>
            <li class="nav-item">
              <a href="/pricing"> Pricing</a>
            </li>
            <li class="nav-item">
              <a href="/product">Product</a>
            </li>
            <li class="nav-item">
              <a href="/support"> Support</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
