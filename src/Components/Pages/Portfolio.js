import React from 'react';
import Wrapper from '../Wrapper';
import image from "./portfolio.png";
import Project from "../Project/index";
import "./style.css";
import cinefileImg from "../../images/cinefile-demo2.png";
import weatherImg from "../../images/weather-dashboard.png";
import plannerImg from "../../images/planner-demo.png";
import blogImg from "../../images/tech-blog-demo.png";
import wikiImg from "../../images/wiki-pour-demo.png";
import noteImg from "../../images/note-taker-demo.png";

function Portfolio() {
    return (
        <>
        <img src={image} className="img-fluid w-100" alt="portfolio-header"/>
        <Wrapper>
        <section className="row row-cols-1 row-cols-lg-3 g-4 m-4">
        
        <Project
         projectImage={weatherImg}
         imageAlt={"weather-demo"}
         title={"Weather Dashboard"}
         description={"Browser-based application for searching for current as well as forecasted weather conditions for any given city. Application built using jQuery, Bootstrap, client side Local Storage and the Openweather API. Click to visit the GitHub repository or the launched page."}
         githubLink={"/weathergithub"}
         projectLink={"/weatherdashboard"}
        />

       <Project
        projectImage={cinefileImg}
        imageAlt={"cinefile-demo"}
        title={"Cine File: Movie DataBase"}
        description={"A browser-based application for searching for and saving movies the user wishes to watch. Application provides multiple ways to search for movies, displays relevant information as well as trailer of choosen movies and allows users to save any movie to a 'Watch List'. Application built as a group project using jQuery and 2 external APIs. Click to visit the GitHub repository or the launched page."}
        githubLink={"/cinefilegithub"}
        projectLink={"/cinefile"}
        />
      
      <Project
        projectImage={blogImg}
        imageAlt={"tech-blog-demo"}
        title={"CMS style Blog"}
        description={"This project aimed at creating a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. The app follows MVC paradigm in it's architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM and express-session npm pakage for authentication."}
        githubLink={"/bloggithub"}
        projectLink={"/techblog"}
        />

       <Project
        projectImage={plannerImg}
        imageAlt={"daily-planner-demo"}
        title={"Daily Planner"}
        description={"A Daily Planner that allows users to input hourly to-do lists according to the time of day. Application built using jQuery, Luxon and Client side Local Storage Click to visit the GitHub repository or the launched page."}
        githubLink={"/plannergithub"}
        projectLink={"/dailyplanner"}
        />

       <Project
        projectImage={noteImg}
        imageAlt={"note-taker-demo"}
        title={"Note Taker"}
        description={"A Note-taker app that allows users to input notes, save them, and delete them when task has been completed. This is a full-stack app built using Node.js, Express.js and javascript. App deployed on Heruko."}
        githubLink={"/notetakergithub"}
        projectLink={"/notetaker"}
        />

       <Project
        projectImage={wikiImg}
        imageAlt={"cms-wiki-demo"}
        title={"CMS Style Wiki"}
        description={"This project aimed at creating a CMS-style wiki where users can view cocktail recipes, view information on different Spirits, search by brand, etc and create their own accounts. Once an account has been created, the user can create, edit or delete their own cocktail recipes as well. The app follows MVC paradigm in it's architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM and express-session npm pakage for authentication. Built as part of a three person group."}
        githubLink={"/wikigithub"}
        projectLink={"/wikiblog"}
        />


        </section>
        </Wrapper>
        </>
    )
}

export default Portfolio
