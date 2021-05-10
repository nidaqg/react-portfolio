import React from 'react';
import { Link } from "react-router-dom";
import ContactCard from '../ContactCard';
import Wrapper from '../Wrapper';
import image from "./contact.png";
import "./style.css"

function Contact() {
  return (
    <>
      <img src={image} className="img-fluid w-100" alt="contact-header" />
      <Wrapper>
        <section className="row row-cols-1 row-cols-lg-2 g-4 m-5">

          <ContactCard>
            <h3 className="text-center fs-5 fw-bold">Connect with Me</h3>
            <p>Have a question for me? Please feel free to reach out to me with any questions or queries!</p>
            <p>Find my resume
              <span>
                <a href="assets/Nida-Ghuman-resume.pdf" download="nida-ghuman-resume" className="fst-italic link-dark"> here</a>
              </span>
            </p>
          </ContactCard>

          <ContactCard>
            <h3 className="text-center fs-5 fw-bold mb-2">Connect with me on LinkedIn or GitHub:</h3>
            <Link to="/github"><i className="fab fa-github-square fa-2x socialIcons2 me-2" style={{ color: 'black' }}></i></Link>
            <Link to="/linkedin"><i className="fab fa-linkedin fa-2x socialIcons2" style={{ color: 'black' }}></i></Link>
            <p className="mt-2">Call me at: 484-253-6054</p>
            <p className="mt-2">Or email me at <a href="mailto:nidaqg@gmail.com" target="_blank" rel="noreferrer" className="link-dark">nidaqg@gmail.com</a></p>
          </ContactCard>

        </section>
      </Wrapper>
    </>
  )
}

export default Contact;
