import React from 'react';
import {Link} from "react-router-dom";
import "./style.css";

function Project(props) {
    return (
        <>
          <section className="col">
            <section className="card text-center h-100 localCard lh-base">
              <img src={props.projectImage} className="card-img-top h-50" alt={props.imageAlt}/>
              <section className="card-body">
                <h5 className="card-title fw-bold fs-5">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <Link to={props.githubLink} className="btn btn-dark myBtn m-2">Go to GitHub</Link>
                <Link to={props.projectLink} className="btn btn-dark myBtn m-2">Go to Project</Link>
              </section>
            </section>
          </section>  
        </>
    )
}

export default Project;
