import React from 'react';
import {HomePage} from './homepage/homepage';
import {About} from './about/about';
import {Users} from './users/users';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Posts} from './posts/posts';

import './App.css';


class App extends React.Component{
  render(){
    return(
      // <HomePage/>
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
         
        </ul>

        <hr />
        
        <Route exact path="/" component={HomePage} />
        <Route path="/posts" component={Posts} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
       
      </div>
    </Router>
    );
  }
}

export default App;
