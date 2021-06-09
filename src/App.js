import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/Header/index";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import Portfolio from "./Components/Pages/Portfolio";
import Footer from "./Components/Footer/index";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column h-100">
      <NavBar/>
      <Route exact path="/" component= {Home}/>
      <Route exact path="/about" component= {Home}/>
      <Route exact path="/portfolio" component= {Portfolio}/>
      <Route exact path="/contact" component= {Contact}/>
      
      <Route path='/github' component={() => { 
     window.location.href = 'https://github.com/nidaqg'; 
     return null}}/>

      <Route path='/linkedin' component={() => { 
     window.location.href = 'https://www.linkedin.com/in/nida-ghuman-7b8a6b1ba/'; 
     return null}}/>

    <Route path='/weathergithub' component={() => { 
     window.location.href = 'https://github.com/nidaqg/weather-dashboard'; 
     return null}}/>
     
    <Route path='/weatherdashboard' component={() => { 
      window.location.href = 'https://nidaqg.github.io/weather-dashboard/'; 
      return null}}/>
      
    <Route path='/cinefilegithub' component={() => { 
        window.location.href = 'https://github.com/nidaqg/CineFile'; 
        return null}}/> 

    <Route path='/cinefile' component={() => { 
        window.location.href = 'https://nidaqg.github.io/CineFile/'; 
        return null}}/>

    <Route path='/bloggithub' component={() => { 
        window.location.href = 'https://github.com/nidaqg/Tech-blog-demo'; 
        return null}}/>

    <Route path='/techblog' component={() => { 
        window.location.href = 'https://lychee-pie-95871.herokuapp.com'; 
        return null}}/> 

    <Route path='/dailyplanner' component={() => { 
        window.location.href = 'https://nidaqg.github.io/daily-workday-planner/'; 
        return null}}/> 

   <Route path='/plannergithub' component={() => { 
        window.location.href = 'https://github.com/nidaqg/daily-workday-planner'; 
        return null}}/> 

    <Route path='/notetakergithub' component={() => { 
        window.location.href = 'https://github.com/nidaqg/note-taker'; 
        return null}}/> 

    <Route path='/notetaker' component={() => { 
        window.location.href = 'https://note-taker-basic.herokuapp.com/'; 
        return null}}/> 

    <Route path='/wikigithub' component={() => { 
        window.location.href = 'https://github.com/nidaqg/wiki-pour'; 
        return null}}/> 

    <Route path='/wikiblog' component={() => { 
        window.location.href = 'https://wiki-pour.herokuapp.com/'; 
        return null}}/> 

    <Route path='/rubberduckiesgithub' component={() => { 
        window.location.href = 'https://github.com/morgan-b/rubber-duckies'; 
        return null}}/> 

   <Route path='/rubberduckies' component={() => { 
        window.location.href = 'https://damp-shelf-60845.herokuapp.com/'; 
        return null}}/> 

 

    

      <Footer/>
      </div>
    </Router>
  );
}

export default App;
