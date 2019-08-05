import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  HomePage } from './homepage/homepage.js';
import {  About } from './about/about.js';
import {  getPost } from './users/user.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
  // < HomePage />

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
          {/* <button onClick="getpost()">getpost</button> */}
          <Link to="/users/"><button>getPost</button></Link>
        </li>
      </ul>
    </nav>

    <Route path="/" exact component={HomePage} />
    <Route path="/about/" component={About} />
    <Route path="/users/" component={getPost} /> 
  </div>
</Router>
  );
}

export default App;
