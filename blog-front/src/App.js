import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import React, { useState } from 'react'

import Logup from "./components/Logup.js"
import Navbar from "./components/Navbar.js"
import Createblog from "./components/Createblog"
import ViewPersonal from "./components/views/ViewPersonal.js"
import ViewAll from "./components/views/ViewAll.js"


function App() {
  // let [links, setlinks]  = useState(["/"])
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path = "/" exact component={Logup}/>
          <Route path = "/create" exact component={Createblog}/>
          <Route path = "/viewpersonal" component={ViewPersonal}/> 
          <Route path = "/viewall" exact component={ViewAll}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
