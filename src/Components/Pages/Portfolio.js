import React from 'react';
import Wrapper from '../Wrapper';
import image from "./portfolio.png";

function Portfolio() {
    return (
        <>
        <img src={image} className="img-fluid w-100" alt="portfolio-header"/>
        <Wrapper></Wrapper>
        </>
    )
}

export default Portfolio
