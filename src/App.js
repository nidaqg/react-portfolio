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
      <Route exact path="/portfolio" component= {Portfolio}/>
      <Route exact path="/contact" component= {Contact}/>
      <Route path='/github' component={() => { 
     window.location.href = 'https://github.com/nidaqg'; 
     return null}}/>
      <Route path='/linkedin' component={() => { 
     window.location.href = 'https://www.linkedin.com/in/nida-ghuman-7b8a6b1ba/'; 
     return null}}/>

      <Footer/>
      </div>
    </Router>
  );
}

export default App;
