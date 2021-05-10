import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark myColors">
            <section className="container-fluid">
              <Link className="navbar-brand" to="/">Nida Ghuman</Link>
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
