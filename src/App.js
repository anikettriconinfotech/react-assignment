import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Homepage } from './homepage/homepage';

import {About} from './about/about.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class App extends React.Component{
render(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/homepage/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
           
          </ul>
        </nav>

        <Route path="/homepage/" exact component={Homepage} >
       
        </Route>
        <Route path="/About/"exact component={About} />
        
      </div>
    </Router>
  );
  }
}

export default App;