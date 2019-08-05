import React from 'react';
import './App.css';
import { HomePage } from './homepage/HomePage';
import { About } from './homepage/about';
import { Posts } from './homepage/posts';
import { Users } from './homepage/users';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    
    return (<Router>
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
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/posts/">Posts</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={HomePage} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <Route path="/posts/" component={Posts} />
      </div>
    </Router>);
  }
export default App;
