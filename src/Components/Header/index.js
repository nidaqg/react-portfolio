import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../images/logo.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark myColors">
            <section className="container-fluid">
              <Link className="navbar-brand" to="/"><img src={logo} alt="logo" className="rounded-circle w-25"/></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavLinks" aria-controls="navbarNavLinks" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <section className="collapse navbar-collapse justify-content-end" id="navbarNavLinks">
                <section className="navbar-nav">
                  <Link 
                  className="nav-link"
                  to="/">Home</Link>

                  <Link 
                  className="nav-link"
                  to="/portfolio">Portfolio
                  </Link>

                  <Link 
                  className="nav-link" 
                  to="/contact">Contact
                  </Link>

                </section>
              </section>
            </section>
        </nav>
    )
}

export default Navbar
