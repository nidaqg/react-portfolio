import React from 'react';
import "./style.css";

function ContactCard (props) {
    return (
        <>
    <section className="col">
    <section className="card m-4 localCard hvr-grow-shadow lh-base h-75">
      <section className="card-body text-center">
          {props.children}
  </section>
  </section>
  </section>
        </>
    )
}

export default ContactCard 
