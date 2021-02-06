//This is app.Js
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Header from "./Components/Header";
// import Navbar from "./Components/Navbar";
 import Section from "./Components/Section";
import home from './Pages/home';

import Contactme from './Pages/Contactme';
import About from './Pages/About'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/home" component={home} />
          <Route exact path="/contactme" component={Contactme} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
<Section />
    </div>
  )
}

export default App;
