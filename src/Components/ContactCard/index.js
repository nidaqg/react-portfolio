import React from 'react'

function ContactCard (props) {
    return (
        <>
    <section className="col">
    <section className="card m-4 localCard infoCard lh-base h-75">
      <section className="card-body text-center">
          {props.children}
  </section>
  </section>
  </section>
        </>
    )
}

export default ContactCard 
