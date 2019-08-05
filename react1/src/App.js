import React from 'react';
import logo from './logo.svg';
import {HomePage} from './homepage/Homepage';
import {About} from './homepage/about';
import {Post} from './homepage/post';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends React.Component {
  render(){
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/post/">Post</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={HomePage} />
        <Route path="/about/" component={About} />
        <Route path="/post/" component={Post} />
      </div>
    </Router>
      
      );
    }
  }
  
    
  


export default App;
