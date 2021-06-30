import React from "react";
//import { Link } from "react-router-dom";
import "./style.css";

function Project(props) {
  return (
    <>
      <section className="col">
        <section className="card text-center h-100 localCard lh-base">
          <img
            src={props.projectImage}
            className="card-img-top h-50"
            alt={props.imageAlt}
          />
          <section className="card-body">
            <h5 className="card-title fw-bold fs-5">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a
              href={props.githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-dark myBtn m-2"
            >
              Go to GitHub
            </a>
            <a
              href={props.projectLink}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-dark myBtn m-2"
            >
              Go to Project
            </a>
            
          </section>
        </section>
      </section>
    </>
  );
}

export default Project;
