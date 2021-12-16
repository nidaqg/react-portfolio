import React from 'react';
import htmlIcon from "../../images/icons/html.png";
import cssIcon from "../../images/icons/css.png";
import bootstrapIcon from "../../images/icons/bootstrap.png";
import githubIcon from "../../images/icons/github.png";
import jqueryIcon from "../../images/icons/jquery.png";
import jsIcon from "../../images/icons/js.png";
import mongoDBIcon from "../../images/icons/mongoDB.png";
import mysqlIcon from "../../images/icons/mysql.png";
import nodejsIcon from "../../images/icons/nodejs.png";
import npmIcon from "../../images/icons/npm.png";
import reactIcon from "../../images/icons/reactlogo.jpeg";
import reactNative from "../../images/icons/react-native.png";


function AboutCard() {
    return (
        <>
          <section className="text-center">
                    <img src={htmlIcon} alt="html-icon" className="img-fluid rounded-circle m-2 socialIcons2" width="15%"/> 
                    <img src={cssIcon} alt="css-icon" className="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>               
                    <img src={jsIcon} alt="js-icon" className="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>               
                    <img src={jqueryIcon} alt="jquery-icon" className="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>               
                    <img src={bootstrapIcon} alt="bootstrap-icon" className="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>               
                    <img src={nodejsIcon} alt="nodejs-icon" className="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>               
                    <img src={npmIcon} alt="npm-icon" className="img-fluid m-2 rounded-circle socialIcons2" width="15%"/>               
                    <img src={mysqlIcon} alt="mysql-icon" className="img-fluid m-2 rounded-circle socialIcons2" width="15%"/>               
                    <img src={githubIcon} alt="github-icon" className="img-fluid rounded-circle m-2 socialIcons2" width="15%"/> 
                    <img src={reactIcon} alt="react-icon" className="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>               
                    <img src={mongoDBIcon} alt="mongoDB-icon" className="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>
                    <img src={reactNative} alt="react-native-icon" className="img-fluid rounded-circle m-2 socialIcons2" width="15%"/>          
                 </section>  
        </>
    )
}

export default AboutCard;
