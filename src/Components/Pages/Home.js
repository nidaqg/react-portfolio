import React from 'react';
import Wrapper from '../Wrapper';
import image from "./home.png";
import profileImage from "../../images/nida-ghuman-2.jpeg";
import IconsCard from "../IconsCard/index";
import "./style.css";

function Home() {
    return (
        <>
        <img src={image} className="img-fluid w-100" alt="home-header"/>
        <Wrapper>
        <section className="row justify-content-center">
            <section className="col-sm-6">
              <section className="row">
                <section className="d-block clearfix mt-4 mb-4 infoCard lh-base">
                  <section className="float-start mx-3 backImg">
                  <img src={profileImage} className="img-fluid rounded localCard hoverImg" style={{width: '200px'}} alt="nida-ghuman"/>
                   </section>
                  <h1 className="text-center fs-3">Hello and Welcome!</h1>
                  <p>My name is Nida and I am a full stack web developer based in the Greater Philadelphia region of Pennsylvania. Like most people in this field, I came to be here by a curvy route and have worn many hats along the way. My background is in Cultural Anthropology and academics and I do not shy away from applying a multi-faceted approach to any project I take on. I am passionate about web development with a focus on turning creative vision into a coherent and sustainable reality by combining visually stunning UI, mobile-first technologies and agile software development.</p>
                  <p>Earning a full-stack web development certificate from UPENN LPS coding BootCamp has facilitated the development of strong skills in HTML5, CSS3, Javascript, Bootstrap, jQuery and GitHub. Working multiple jobs throughout college as well as the fast-paced nature of the Coding Bootcamp has helped me hone my abilities in time management, teamwork and organization.</p> 
                  <p>I have been known as an organized worker and a creative problem-solver, capable of confident independent work as well as meaningful collaboration.</p>
                  <h2 className="text-center fs-3">Skills</h2>
                  <IconsCard/>
                </section>
              </section>

           </section>
         </section> 
        </Wrapper>
        </>
    )
}

export default Home
