import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";


function CardBody() {
    return (
            <section className="card-body myColors">
              <h5 className="card-title">Connect with Me</h5>
              <Link to="/github"><i className="fab fa-github-square fa-3x socialIcons mx-2"></i></Link>
              <Link to="/linkedin"><i className="fab fa-linkedin fa-3x socialIcons mx-2"></i></Link>
            </section>
    )
}

export default CardBody;
