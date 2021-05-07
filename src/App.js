import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/Header/index";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import Portfolio from "./Components/Pages/Portfolio";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column h-100">
      <NavBar/>
      <Route exact path="/" component= {Home}/>
      <Route exact path="/portfolio" component= {Portfolio}/>
      <Route exact path="/contact" component= {Contact}/>
      </div>
    </Router>
  );
}

export default App;
