import React from 'react';
import htmlIcon from "../../images/icons/html.png";
import cssIcon from "../../images/icons/css.png";
import bootstrapIcon from "../../images/icons/bootstrap.png";
import githubIcon from "../../images/icons/github.png";
import jqueryIcon from "../../images/icons/jquery.png";
import jsIcon from "../../images/icons/js.png";
import mongoDBIcon from "../../images/icons/mongoDB.png";
import mongooseIcon from "../../images/icons/mongooselogo.jpeg";
import mysqlIcon from "../../images/icons/mysql.png";
import nodejsIcon from "../../images/icons/nodejs.png";
import npmIcon from "../../images/icons/npm.png";
import reactIcon from "../../images/icons/reactlogo.jpeg";


function AboutCard() {
    return (
        <>
          <section className="text-center">
                    <img src={htmlIcon} alt="html-icon" class="img-fluid rounded-circle m-2 socialIcons2" width="15%"/> 
                    <img src={cssIcon} alt="css-icon" class="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>               
                    <img src={jsIcon} alt="js-icon" class="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>               
                    <img src={jqueryIcon} alt="jquery-icon" class="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>               
                    <img src={bootstrapIcon} alt="bootstrap-icon" class="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>               
                    <img src={nodejsIcon} alt="nodejs-icon" class="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>               
                    <img src={npmIcon} alt="npm-icon" class="img-fluid m-2 rounded-circle socialIcons2" width="15%"/>               
                    <img src={mysqlIcon} alt="mysql-icon" class="img-fluid m-2 rounded-circle socialIcons2" width="15%"/>               
                    <img src={githubIcon} alt="github-icon" class="img-fluid rounded-circle m-2 socialIcons2" width="15%"/> 
                    <img src={reactIcon} alt="github-icon" class="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>               
                    <img src={mongooseIcon} alt="github-icon" class="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>               
                    <img src={mongoDBIcon} alt="github-icon" class="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>               
                 </section>  
        </>
    )
}

export default AboutCard;
